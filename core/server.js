/**
 * Created by Ricky on 11/10/15.
 */

//Dependencies

var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var morgan = require('morgan');
var express = require('express');
var login = require('../middleware/login');
var authentication = require('../middleware/authentication');
var User = require('../models/user_model');
var jwt  = require('jsonwebtoken');
var moment = require('moment');
var carSchema = require('../models/car_model');
var cart = mongoose.model('cars',carSchema);
var productSchema = require('../models/products_model');
var productModel = mongoose.model('products',productSchema);

String.prototype.toObjectId = function() {
    var ObjectId = (require('mongoose').Types.ObjectId);
    return new ObjectId(this.toString());
};



//express
var app = express();


app.use(bodyparser.urlencoded({
    extended: false
}));

app.use(bodyparser.json());
app.set('superSecret', 'darr123');

app.use(morgan('dev'));
//app.use(methodOverride());

//MongoDB
mongoose.connect('mongodb://localhost/darr');

//Login

app.use('/index', require('../routes/index'));

app.post('/authenticate', function(req, res) {

    // find the user
    User.findOne({

        $or:[{fingerprint: req.body.fingerprint},{
            user: req.body.user
        }]
    }, function(err, user) {
        console.log(user);

        if (err) throw err;

        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User or fingerprint id not found.' });
        } else if (user) {

            // check if password matches
            if (user.pass != req.body.pass && req.body.fingerprint==null) {
                res.json({success:false, message: 'Authentication failed. Wrong password or fingerprint id.' });
            } else if(user.pass == req.body.pass || user.fingerprint == req.body.fingerprint) {

                // if user is found and password is right
                // create a token
                User.find({
                    $or:[{
                        fingerprint: req.body.fingerprint
                    },{
                        user: req.body.user
                    }]
                }, function(err, users) {

                    if (err) res.json(err);

                    if (!users) {
                        res.json({ success: false, message: 'User not found.'});
                    } else if(users) {
                        var payload ={
                            sub: user._id,
                            iat: moment().unix(),
                            exp: moment().add(1, "days").unix()
                        };
                        var token = jwt.sign(payload, app.get('superSecret'));

                        var userMap={};
                        users.forEach(function(user){
                            userMap = user;
                        });

                        res.json({
                            success: true,
                            key_success: 'success',
                            token: token,
                            userData: userMap});
                    }

                });

            }

        }

    });
});

app.use(function(req,res,next) {
    var token = req.body.token || req.param('token') || req.headers['x-access-token'];

// decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function (err, decoded) {
            if (err) {
                return res.json({success: false, message: 'Failed to authenticate token.'});
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }

            if (jwt.exp <= moment().unix()) {
                return res
                    .status(401)
                    .send({message: "El token ha expirado"});
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
});

app.post('/api/carProducts',function(req,res) {

    var cast = req.body.user_id;
    cart.find({user_id: cast},function(err,result){


        var product_id = result.map(function(result){
            return new mongoose.Types.ObjectId(result.product_id);
        });

        productModel.find({_id: {$in: product_id}},function(err,result){
            res.json({Products: result});
        });

    })
});

//Routes
app.use('/api', require('../routes/api'));

app.listen(2000);
console.log('server is running at port 2000');







/**
 * Created by Ricky on 11/10/15.
 */

//Dependencies

var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var morgan = require('morgan');
var express=require('express');
var url = require('url')
//var jwt = require('jwt-simple');
var jwt  = require('jsonwebtoken');
//var logearse=require('../core/login');
var User=require('../models/user_model');
//var jwtauth = require('../core/login');
//express
var app=express();

app.use(bodyparser.urlencoded({
    extended: false
}));

app.use(bodyparser.json());


app.set('superSecret', 'darrproject123');
app.use(morgan('dev'));
//app.use(methodOverride());

//MongoDB
mongoose.connect('mongodb://localhost/darr');

//Routes
app.get('/', function(req, res) {
    res.send('Hello! The API is working');
});


//Login

app.post('/authenticate', function(req, res) {

    // find the user
    User.findOne({
        user: req.body.user,
    }, function(err, user) {

        if (err) throw err;

        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {

            // check if password matches
            if (user.pass != req.body.pass) {
                res.json({success: false, message: 'Authentication failed. Wrong password.' });
            } else {

                // if user is found and password is right
                // create a token
                var token = jwt.sign(user, app.get('superSecret'), {
                    expiresIn: 3600 // expires in 1 hours
                });

                res.json({
                    success: true,
                    key_success: 'success',
                    token: token
                });
            }

        }

    });
});

app.use(function (req, res, next) {
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

app.use('/api', require('../routes/api'));

app.post('/userList', function(req, res) {

    // find the user
    User.find({
        user: req.body.user,
    }, function(err, users) {

        if (err) throw err;

        if (!users) {
            res.json({ success: false, message: 'User not found.' });
        } else if (users) {

            var userMap={};
            users.forEach(function(user){
                userMap[user._id]=user;
            });

            res.json({userList: userMap});
        }

    });
});

app.listen(4000);
console.log('server is running at port 4000');







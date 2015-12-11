/**
 * Created by Ricky on 11/10/15.
 */

//Dependencies

var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var morgan = require('morgan');
var express=require('express');
var jwt  = require('jsonwebtoken');
var User=require('../models/user_model');
var Report=require('../models/report_model');
var Request=require('../models/request_model');

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

app.use('/index', require('../routes/index'));


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
                User.find({
                    user: req.body.user,
                }, function(err, users) {

                    if (err) throw err;

                    if (!users) {
                        res.json({ success: false, message: 'User not found.'});
                    } else if (users) {

                        var token = jwt.sign(user, app.get('superSecret'), {
                            expiresIn: 3600 // expires in 1 hours
                        });

                        var userMap={};
                        users.forEach(function(user){
                            userMap=user;
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

    User.find({
        user: req.body.user,
    }, function(err, users) {

        if (err) throw err;

        if (!users) {
            res.json({ success: false, message: 'User not found.' });
        } else if (users) {

            var userMap={};
            users.forEach(function(user){
                userMap=user;
            });

            res.json({userList: userMap});
        }

    });
});

app.post('/reportList', function(req, res) {

    Report.find({
        report: req.body.user,
    }, function(err, report) {

        if (err) throw err;

        if (!report) {
            res.json({ success: false, message: 'User not found.' });
        } else if (report) {

            var reportMap={};
            report.forEach(function(report){
                reportMap=report;
            });

            res.json({reportList: reportMap});
        }

    });
});

app.post('/requestList', function(req, res) {

    Request.find({
        request: req.body.user,
    }, function(err, request) {

        if (err) throw err;

        if (!request) {
            res.json({ success: false, message: 'User not found.' });
        } else if (request) {

            var requestMap={};
            request.forEach(function(request){
                requestMap=request;
            });

            res.json({reportList: requestMap});
        }

    });
});


app.listen(2000);
console.log('server is running at port 2000');







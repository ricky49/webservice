/**
 * Created by Ricky on 11/27/15.
 */
/**
 * jwtauth
 *
 *  A simple middleware for parsing a JWt token attached to the request. If the token is valid, the corresponding user
 *  will be attached to the request.
 */
var express=require('express');
var app=express();


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

/*var url = require('url')
var UserModel = require('../models/user_model')
var jwt = require('jwt-simple');

module.exports = function(req, res, next){

    // Parse the URL, we might need this
    var parsed_url = url.parse(req.url, true)

    /**
     * Take the token from:
     *
     *  - the POST value access_token
     *  - the GET parameter access_token
     *  - the x-access-token header
     *    ...in that order.
     */
/*
    var token = (req.body && req.body.access_token) || parsed_url.query.access_token || req.headers["x-access-token"];

    if (token) {

        try {
            var decoded = jwt.decode(token, app.get('jwtTokenSecret'))

            if (decoded.exp <= Date.now()) {
                res.end('Access token has expired', 400)
            }

            UserModel.findOne({ '_id': decoded.iss }, function(err, user){

                if (!err) {
                    req.user = user
                    return next()
                }
            })

        } catch (err) {
            return next()
        }

    } else {

        next()

    }
}*/

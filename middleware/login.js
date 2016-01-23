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
var jwt  = require('jsonwebtoken');
var moment = require('moment');

app.set('superSecret', 'darr123');
 module.exports= function(req,res) {
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

             if(jwt.exp <= moment().unix()) {
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
 };

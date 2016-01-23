/**
 * Created by Ricky on 1/22/16.
 */

var Car = require('../models/car_model');
var product = require('../models/products_model');
var express=require('express');
var router = express.Router();
var app= express();


exports= function(req, res) {

    Car.find({
        users: req.body.user_id
    }, function (err, users) {

        if (!users) {
            res.json({success: false, message: 'User not found.'});
        } else if (users) {

            var data = {};
            users.forEach(function (user) {
                data = user;
                res.json({map: data});

            });

        }
    });
};

module.exports =router;
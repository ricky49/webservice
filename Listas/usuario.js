/**
 * Created by Ricky on 12/6/15.
 */

var mongoose=require('mongoose');
var express=require('express');
var User=require('../models/user_model');

//express
var app=express();

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
            user.forEach(function(user){
                userMap[user._id]=user;
            });

            res.json({allUser: userMap});
        }

    });
});
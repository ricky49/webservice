/**
 * Created by Ricky on 11/10/15.
 */

//var users=require('./routes/users');

//Dependencies
var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
//var methodOverride = require('method-override');

//express
var app=express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

//MongoDB
mongoose.connect('mongodb://localhost/darr');

//Routes
app.use('/api', require('../routes/api'));

//start server
app.listen(2000);
console.log('server is running at port 2000');

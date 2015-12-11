/**
 * Created by Ricky on 11/10/15.
 */
//dependencies
var express=require('express');
var restful=require('node-restful');
var mongoose=restful.mongoose;

//schema
var userSchema=new mongoose.Schema(
    {
        user:{ type: String, required: true, index: { unique: true } },
        pass: String,
        mail:String,
        name:String,
        lastname:String
    });



//return model
 module.exports=restful.model('users',userSchema);



/**
 * Created by Ricky on 11/15/15.
 */
//dependencies
var restful= require('node-restful');
var mongoose=restful.mongoose;
var moment = require('moment');
var date = moment().format('YYYY-MM-DD');

//schema
var reportSchema=new mongoose.Schema(
    {
        pacient_name: {type:String,required:true},
        insurance_name: {type:String,required:true},
        nss:{type:Number,required:true},
        bandeja_id:{type:Number,required:true},
        doctor:{type:String,required:true},
        surgeon_name:{type:String,required:true},
        observations:{type:String,required:true},
        center_name:{type:String,required:true},
        date: {type: String, default: date},
        user:String,
        last_update: String

    });


//return model
module.exports=restful.model('report',reportSchema);

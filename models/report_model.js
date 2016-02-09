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
        pacient_name: String,
        insurance_name: String,
        nss:{type:Number,required:true},
        bandeja_id:Number,
        doctor:String,
        surgeon_name:String,
        observations:String,
        center_name:String,
        date: {type: String, default: date},
        user:String,
        last_update: String,
	products: [{product_id:{type:String,default:'Null'}},
	{quantity:{type:Number,default:0}}]

    });


//return model
module.exports=restful.model('report',reportSchema);

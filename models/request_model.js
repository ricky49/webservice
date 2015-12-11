/**
 * Created by Ricky on 11/15/15.
 */
//dependencies
var restful=require('node-restful');
var mongoose=restful.mongoose;

//schema
var requestSchema=new mongoose.Schema(
    {
        pacient_name: String,
        document: Number,
        pacient_tel:Number,
        ars:String,
        authorization:Number,
        procedure_name:String,
        surgery_date:String,
        center_name:String,
        surgeon_name:String,
        user:String

    });

//return model
module.exports=restful.model('request',requestSchema);
/**
 * Created by Ricky on 11/15/15.
 */
//dependencies
var restful=require('node-restful');
var mongoose=restful.mongoose;

//schema
var reportSchema=new mongoose.Schema(
    {
        pacient_name: String,
        insurance_name: String,
        nss:Number,
        bandeja_id:Number,
        doctor:String,
        surgeon_name:String,
        observations:String,
        center:String,
        date:String,
        user:String
    });

//return model
module.exports=restful.model('report',reportSchema);
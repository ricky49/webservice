/**
 * Created by Ricky on 11/15/15.
 */
//dependencies
var restful=require('node-restful');
var mongoose=restful.mongoose;

//schema
var surgerySchema=new mongoose.Schema(
    {
        surgeon_id: Number,
        procedure_id:Number,
        center_name:String,
        surgery_date:String

    });

//return model
module.exports=restful.model('surgery',surgerySchema);
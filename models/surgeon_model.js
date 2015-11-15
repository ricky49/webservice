/**
 * Created by Ricky on 11/15/15.
 */
//dependencies
var restful=require('node-restful');
var mongoose=restful.mongoose;

//schema
var surgeonSchema=new mongoose.Schema(
    {
        surgeon_name: String,
        speciality: String,
        surgeon_tel:Number
    });

//return model
module.exports=restful.model('surgeons',surgeonSchema);
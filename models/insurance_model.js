/**
 * Created by Ricky on 11/15/15.
 */
//dependencies
var restful=require('node-restful');
var mongoose=restful.mongoose;

//schema
var insuranceSchema=new mongoose.Schema(
    {
        insurance_name: String,
        system: String
    });

//return model
module.exports=restful.model('insurance',insuranceSchema);
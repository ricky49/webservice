/**
 * Created by Ricky on 1/27/16.
 */
var restful=require('node-restful');
var mongoose=restful.mongoose;

//schema
var requestStatusSchema=new mongoose.Schema(
    {
        status: String

    });

//return model
module.exports=restful.model('requestStatus',requestStatusSchema);
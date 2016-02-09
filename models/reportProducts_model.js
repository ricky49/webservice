/**
 * Created by Ricky on 2/8/16.
 */
var restful=require('node-restful');
var mongoose=restful.mongoose;

//schema
var reportProductSchema=new mongoose.Schema(
    {
        report_id: String,
        product_id: String,
        user_id: String,
        quantity: Number
    });

//return model
module.exports=restful.model('reportProducts', reportProductSchema);
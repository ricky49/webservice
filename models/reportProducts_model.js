/**
 * Created by Ricky on 2/8/16.
 */
var restful=require('node-restful');
var mongoose=restful.mongoose;

//schema
var reportProductSchema=new mongoose.Schema(
    {
        report_id: {type:String,default:'empty'},
        product_id: {type:String,default: 'empty'},
        user_id: {type:String, default: 'empty'},
        quantity: {type:Number,default: 0}
    });

//return model
module.exports=restful.model('reportProducts', reportProductSchema);
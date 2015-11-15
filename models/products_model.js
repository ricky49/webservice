/**
 * Created by Ricky on 11/15/15.
 */
//dependencies
var restful=require('node-restful');
var mongoose=restful.mongoose;

//schema
var productsSchema=new mongoose.Schema(
    {
        item_name: String,
        item_price: Number,

    });

//return model
module.exports=restful.model('products',productsSchema);
/**
 * Created by Ricky on 1/21/16.
 */
/**
 * Created by Ricky on 11/15/15.
 */
//dependencies
var restful=require('node-restful');
var mongoose=restful.mongoose;


//schema
var carSchema = new mongoose.Schema(
    {
        product_id: {type:mongoose.Schema.ObjectId,ref:'products'},
        user_id: String,
        quantity: Number
    });

//return model
module.exports = restful.model('cars',carSchema);

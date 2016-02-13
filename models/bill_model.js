
/**
 * Created by Ricky on 11/15/15.
 */
//dependencies
var restful=require('node-restful');
var mongoose=restful.mongoose;


//schema
var billSchema = new mongoose.Schema(
    {
        user_id: {type:mongoose.Schema.ObjectId,ref:'users'},
        product_id: {type:mongoose.Schema.ObjectId,ref:'products'},
        total: Number
    });

//return model
module.exports = restful.model('bills',billSchema);

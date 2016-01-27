/**
 * Created by Ricky on 11/15/15.
 */
//dependencies
var restful=require('node-restful');
var mongoose=restful.mongoose;

//schema
var plateSchema=new mongoose.Schema(
    {
        item: String,
        plate_id: Number,
        procedure_id: Number
    });

//return model
module.exports=restful.model('plates',plateSchema);
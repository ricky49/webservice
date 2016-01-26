/**
 * Created by Ricky on 11/15/15.
 */
//dependencies
var restful=require('node-restful');
var mongoose=restful.mongoose;

//schema
var procedureSchema=new mongoose.Schema(
    {
        procedure_desc: String,
        plate_id: Number

    });

//return model
module.exports=restful.model('procedure',procedureSchema);
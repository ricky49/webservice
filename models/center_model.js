/**
 * Created by Ricky on 11/11/15.
 */
//dependencies
var restful=require('node-restful');
var mongoose=restful.mongoose;


//schema
var centerSchema=new mongoose.Schema(
    {
        center_name:String
    }
);

module.exports=restful.model('center',centerSchema);
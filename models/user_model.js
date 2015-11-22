/**
 * Created by Ricky on 11/10/15.
 */
//dependencies
var restful=require('node-restful');
var mongoose=restful.mongoose;

//schema
var userSchema=new mongoose.Schema(
    {
        user: String,
        pass: String,
        mail:String,
        name:String,
        lastname:String

    });


//return model
 module.exports=restful.model('users',userSchema);






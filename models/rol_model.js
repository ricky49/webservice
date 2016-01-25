/**
 * Created by Ricky on 1/24/16.
 */
/**pa
 * Created by Ricky on 11/15/15.
 */
//dependencies
var restful=require('node-restful');
var mongoose=restful.mongoose;

//schema
var rolSchema=new mongoose.Schema(
    {
        rol_name: String

    });

//return model
module.exports=restful.model('roles',rolSchema);
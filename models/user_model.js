/**

 * Created by Ricky on 11/10/15.
 */
//dependencies
var restful=require('node-restful');
var mongoose= restful.mongoose;
var userSchema = new mongoose.Schema(
    {
        user:{ type: String, required: true, index: { unique: true } },
        pass: { type: String, required: true},
        mail:{ type: String, required: true, index: { unique: true } },
        name:{ type: String, required: true},
        lastname:{ type: String, required: true},
        document: {type: Number, required: true, index: { unique: true }},
        rol: {type: String, default: 'pacient'},
        fingerprint: {type:String,index: { unique: true }}
    });

//return model
 module.exports = restful.model('users',userSchema);



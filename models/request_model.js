/**pa
 * Created by Ricky on 11/15/15.
 */
//dependencies
var restful=require('node-restful');
var mongoose=restful.mongoose;

//schema
var crypto = require('crypto');

function random (howMany, chars) {
        chars = chars
            || "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
        var rnd = crypto.randomBytes(howMany)
            , value = new Array(howMany)
            , len = chars.length;

        for (var i = 0; i < howMany; i++) {
                value[i] = chars[rnd[i] % len]
        }

        return value.join('');
}

var requestSchema=new mongoose.Schema(
    {
        pacient_name: String,
        document: {type: Number, required: true, index: { unique: true } },
        pacient_tel:Number,
        insurance_name:String,
        authorization:{type:Number, default: random(10,'12455677')},
        procedure_name:String,
        surgery_date:String,
        center_name:String,
        surgeon_name:String,
        user:String,
        status:{type: String,default:'enviado'},
	item_manuales: String

    });

//return model
module.exports=restful.model('request',requestSchema);

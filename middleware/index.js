/**
 * Created by Ricky on 12/1/15.
 */
/**
 * Require in the other controllers
 */
var auth = require('./authentication.js')


module.exports.set = function(app) {

        // Now set the routes from the other controllers

     auth.set(app)

}
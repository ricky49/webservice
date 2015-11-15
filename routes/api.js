/**
 * Created by Ricky on 11/10/15.
 */
var express = require('express');
var router = express.Router();

//models
var user_model=require('../models/user_model');
var center_model=require('../models/center_model');
var insurance_model=require('../models/insurance_model');
var plate_model=require('../models/plates_model');
var surgeon_model=require('../models/surgeon_model');
var products_model=require('../models/products_model');
var request_model=require('../models/request_model');
var report_model=require('../models/report_model');
var surgeon_model=require('../models/surgeon_model');
var surgery_model=require('../models/surgery_model');

var procedure_model=require('../models/procedure_model');

//Routes
user_model.methods(['get','put','post','delete']);
user_model.register(router,'/users');

center_model.methods(['get','put','post','delete']);
center_model.register(router,'/center');

insurance_model.methods(['get','put','post','delete']);
insurance_model.register(router,'/insurance');

plate_model.methods(['get','put','post','delete']);
plate_model.register(router,'/plates');

surgeon_model.methods(['get','put','post','delete']);
surgeon_model.register(router,'/surgeons');

products_model.methods(['get','put','post','delete']);
products_model.register(router,'/products');

request_model.methods(['get','put','post','delete']);
request_model.register(router,'/request');

report_model.methods(['get','put','post','delete']);
report_model.register(router,'/report');

surgeon_model.methods(['get','put','post','delete']);
surgeon_model.register(router,'/surgeon');

surgery_model.methods(['get','put','post','delete']);
surgery_model.register(router,'/surgery');

procedure_model.methods(['get','put','post','delete']);
procedure_model.register(router,'/procedure');


//return routes
module.exports = router;
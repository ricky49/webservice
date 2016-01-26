var express = require('express');
var router = express.Router();
var user_model=require('../models/user_model');

user_model.methods(['post']);
user_model.register(router,'/register');

router.get('/',function(res){
  res.send('hola papa');
});



module.exports = router;

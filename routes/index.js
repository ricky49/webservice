var express = require('express');
var router = express.Router();
var user_model=require('../models/user_model');

user_model.methods(['post']);
user_model.register(router,'/register');

router.get('/api', function(req, res) {
  res.send('api is working');
});

router.get('/', function(req, res) {
  res.send('Hello! The API is working');
});

module.exports = router;

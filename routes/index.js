var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb');
const mongo = require('mongoskin');
var crypto = require('crypto')
/* GET home page. */
router.get('/', function(req, res, next) {


var db=mongo.db('mongodb://localhost:27017/test',{native_parser:true});
db.bind('homework7');
db.homework7.findOne({},function (err,item) {
var enc=item.message;



//function decrypt(text){

  var decipher = crypto.createDecipher('aes256','asaadsaad');
  var dec = decipher.update(enc,'hex','utf8')
  dec += decipher.final('utf8');
  console.log(dec);
  res.render('index', { title: dec });


});


});

module.exports = router;

var express = require('express');
var router = express.Router();
var countmap = require('./countmap');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  if(!countmap.index){
    countmap.index = 1;
  }else{
    countmap.index+=1;
  }

  console.log(countmap);
});

module.exports = router;

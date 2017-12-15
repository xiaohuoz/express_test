var express = require('express');
var router = express.Router();
var countmap = require('./countmap.js');
/* GET home page. */

router.get('/', function(req, res, next) {
	console.log(countmap);
	var count = 0;
	 res.writeHeader(200,{
	        'Access-Control-Allow-Origin':'*','Access-Control-Allow-Method':'GET,POST'
	    ,'Content-Type':'text/event-stream'});
	setInterval(()=>{
            // res.write("id :" + count++ + '\n');
        res.write("data: " + new Date().toLocaleDateString() + ' ' + '\n\n');
	},2000);
});

module.exports = router;
// lastlogouttime
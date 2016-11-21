var express = require('express');
var mongo = require('mongodb');
var router = express.Router();

/*function hello(req, res) {
	//var id = req.swagger.params.id.value;
	console.log(" req ----------------------------" + req.params.id);
	console.log("Piyush singh" + id);
    var name = req.swagger.params.name.value || 'stranger';
    var hello = util.format('Hello, %s', name);
    res.json(hello);
}*/

router.get('/hello', function(req, res, next) {
    //alert("Piyush singh" + req.swagger.params.name.value);
    //console.log(" req ----------------------------" + req.params.name);
    console.log(" req swagger param ----------------------------" + req.swagger.params);
    //var name = req.swagger.params.name.value || 'stranger';
    //var hello = util.format('Hello, %s', name);
    res.json("hello");
});

module.exports = router;

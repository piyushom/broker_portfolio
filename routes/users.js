var express = require('express');
var mongo = require('mongodb');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;



var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */

router.get('/assetList', function(req, res) {
    var db = req.db;
    var collection = db.get('asset_details');
    
    
    collection.find({},{},function(e,docs){
        res.send(docs);
    });
});

router.get('/assetList:id', function(req, res) {
    var db = req.db;	
    var collection = db.get('asset_details');
    //console.log("Asset Id " + "5821b6c4614537e4727ff792");
    var o_id = new mongo.ObjectID(res.params.id);
    console.log("params " + o_id)
	
    
    collection.update({'_id': o_id},function(e,docs){
        res.json(docs);
    });
});

router.get('/personalDetailsList', function(req, res) {
	
    var db = req.db;
    var collection = db.get('personal_details');
    
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

module.exports = router;

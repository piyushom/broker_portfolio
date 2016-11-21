var express = require('express');
var router = express.Router();
var mongo = require('mongodb');

/* GET home page. */
router.get('/assets', function(req, res, next) {
  res.render('index', { title: 'Brokering Portfolio' });
});

router.get('/assetList', function(req, res) {
    var db = req.db;
    var collection = db.get('asset_details');
    
    
    collection.find({},{},function(e,docs){
        res.send(docs);
    });
});


module.exports = router;

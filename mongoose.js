/*var mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1/node_mongo');

var assetCol = mongoose.model('asset_details');


assetCol.findOne({assetId: 'FD101'}).exec(function(err,assets){
	if(assets){
		console.log(" DB Sucess" + assets);
	}
	else{
		console.log(" error with details");
	}

})*/

var mongoosastic=require("mongoosastic");

var bookSchema = new mongoose.Schema({  
  title: String,
  author: String,
  description: { type:String, es_indexed:true },
  content: { type:String, es_indexed:true }
});
var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};



function getAllAssets(req, res, next) {
  console.log("getAll Assets");

  var assetCol = req.assetCol;
  assetCol.find({}).exec(function(err,assets){
    if(assets){
      console.log(" DB Sucess" + assets);
      res.status(200)
        .json({
          status: 'success',
          data: assets,
          message: 'Retrieved ALL assets'
        });
    }
    else{
      console.log(" error with details");
    }
  });

};
function getAssetsById(req, res, next) {
  console.log(req.params.id);
 var assetCol = req.assetCol;
  assetCol.findOne({_id: req.params.id}).exec(function(err,assets){
    if(assets){
      console.log(" DB Sucess" + assets);
      res.status(200)
        .json({
          status: 'success',
          data: assets,
          message: 'Retrieved ALL assets'
        });
    }
    else{
      console.log(" error with details");
    }
  });
}

function getSingleAssetByName(req, res, next) {
  var pupName = (req.params.name);
  var pupAdd = (req.params.add);
  console.log("get single Puppy by name");
  console.log("Single Puppy name " + pupName + " ---add---" + pupAdd)
  db.one('select * from pups where id = $1', pupName)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE puppy'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createAsset(req, res, next) {

  console.log(" Body " + JSON.stringify(req.body));

  //req.body.age = parseInt(req.body.age);
  var assetCol = req.assetCol;
  //var asset = new assetCol(req.body);

  var asset = new assetCol({
  assetId: req.body.assetId,
  assetCategory: req.body.assetCategory,
  purchasePrice: req.body.purchasePrice,
  customerId: req.body.customerId,
  dateSold: req.body.dateSold,
  units: req.body.units,
  description: req.body.description,
  remark: req.body.remark,
  assetTenure: req.body.assetTenure,
  interestRate: req.body.interestRate,
  currencyCode: req.body.currencyCode
 });
  asset.save(function (err, asset) {
    if (err){
      return console.error(err);
    } 
    else{
      console.log(" DB Sucess" + asset);
      res.status(200)
        .json({
          status: 'success',
          data: asset,
          message: 'Asset has been added'
        });
    }  
    
  });

/* assetCol.save(JSON.stringify(req.body)).exec(function(err,assets){
    if(assets){
      console.log(" DB Sucess" + assets);
      res.status(200)
        .json({
          status: 'success',
          data: assets,
          message: 'Retrieved ALL puppies'
        });
    }
    else{
      console.log(" error with details");
    }
  });*/

}

function updateAsset(req, res, next) {
  db.none('update pups set name=$1, breed=$2, age=$3, sex=$4 where id=$5',
    [req.body.name, req.body.breed, parseInt(req.body.age),
      req.body.sex, parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated asset'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function removeAsset(req, res, next) {

  var assetCol = req.assetCol;
  assetCol.findByIdAndRemove(req.params.id,function(err) {
  if (err) throw err;
    console.log('Asset deleted!');
    res.status(200)
        .json({
          status: 'success',
          message: `Removed Asset`
        });
  });
}
//--------------------------------------------------------------------------------------------

function getAllLiabilities(req, res, next) {
  console.log("getAll Assets");

  var liabilityCol = req.liabilityCol;
  liabilityCol.find({}).exec(function(err,liability){
    if(liability){
      console.log(" DB Sucess" + liability);
      res.status(200)
        .json({
          status: 'success',
          data: liability,
          message: 'Retrieved ALL liability'
        });
    }
    else{
      console.log(" error with details");
    }
  });

};
function getLiabilityById(req, res, next) {
  console.log(req.params.id);
 var liabilityCol = req.liabilityCol;
  liabilityCol.findOne({_id: req.params.id}).exec(function(err,liability){
    if(liability){
      console.log(" DB Sucess" + liability);
      res.status(200)
        .json({
          status: 'success',
          data: liability,
          message: 'Retrieved ALL liability'
        });
    }
    else{
      console.log(" error with details");
    }
  });
}

function getSingleLiabilityByName(req, res, next) {
  var pupName = (req.params.name);
  var pupAdd = (req.params.add);
  console.log("get single liability by name");
  console.log("Single liability name " + pupName + " ---add---" + pupAdd)
  db.one('select * from liability where id = $1', pupName)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE liability'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createLiability(req, res, next) {

  console.log(" Body " + JSON.stringify(req.body));

  //req.body.age = parseInt(req.body.age);
  var liabilityCol = req.liabilityCol;
  //var asset = new assetCol(req.body);

  var liability = new liabilityCol({
  liabilityId: req.body.liabilityId,
  liabilityCategory: req.body.liabilityCategory,
  liabilityPremium: req.body.liabilityPremium,
  customerId: req.body.customerId,
  liabilityTenure: req.body.liabilityTenure,
  annuityTerm: req.body.annuityTerm,
  interestRate: req.body.interestRate,
  description: req.body.description,
  isPaymentDefaulter: req.body.isPaymentDefaulter,
  purchaseDate: req.body.purchaseDate,
  repayStartDate: req.body.repayStartDate,
  principalValue: req.body.principalValue
 });
  liability.save(function (err, liability) {
    if (err){
      return console.error(err);
    } 
    else{
      console.log(" DB Sucess" + liability);
      res.status(200)
        .json({
          status: 'success',
          data: liability,
          message: 'Liability has been added'
        });
    }  
    
  });

/* assetCol.save(JSON.stringify(req.body)).exec(function(err,assets){
    if(assets){
      console.log(" DB Sucess" + assets);
      res.status(200)
        .json({
          status: 'success',
          data: assets,
          message: 'Retrieved ALL puppies'
        });
    }
    else{
      console.log(" error with details");
    }
  });*/

}

function updateLiability(req, res, next) {
  db.none('update pups set name=$1, breed=$2, age=$3, sex=$4 where id=$5',
    [req.body.name, req.body.breed, parseInt(req.body.age),
      req.body.sex, parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated liability'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function removeLiability(req, res, next) {

  var liabilityCol = req.liabilityCol;
  liabilityCol.findByIdAndRemove(req.params.id,function(err) {
  if (err) throw err;
    console.log('Asset deleted!');
    res.status(200)
        .json({
          status: 'success',
          message: `Removed liability`
        });
  });
}
//--------------------------------------------------------------------------------------------

module.exports = {
  getAllAssets: getAllAssets,
  getAssetsById: getAssetsById,
  getSingleAssetByName: getSingleAssetByName,
  createAsset: createAsset,
  updateAsset: updateAsset,
  removeAsset: removeAsset,

  getAllLiabilities: getAllLiabilities,
  getLiabilityById: getLiabilityById,
  getSingleLiabilityByName: getSingleLiabilityByName,
  createLiability: createLiability,
  updateLiability: updateLiability,
  removeLiability: removeLiability
};

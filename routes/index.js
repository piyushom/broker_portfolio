var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var db = require('../queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Brokering Portfolio' });
});

 
/**
 * @swagger
 * definition:
 *   Asset:
 *     properties:
 *       assetId:
 *         type: string
 *       assetCategory:
 *         type: string
 *       purchasePrice:
 *         type: integer
 *       customerId:
 *         type: string
 *       dateSold:
 *         type: string
 *       purchaseDate:
 *         type: date
 *       units:
 *         type: integer
 *       description:
 *         type: string
 *       remark:
 *         type: string
 *       assetTenure:
 *         type: string
 *       interestRate:
 *         type: string
 *       currencyCode:
 *         type: string
 */

/**
 * @swagger
 * /api/brokerportfolio/assets:
 *   get:
 *     tags:
 *       - Assets
 *     description: Returns all assets
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of assets
 *         schema:
 *           $ref: '#/definitions/Asset'
 */


router.get('/api/brokerportfolio/assets', db.getAllAssets);

/*router.get('/api/brokerportfolio', function(req, res) {
    var db = req.db;
    var collection = db.get('asset_details');
    
    
    collection.find({},{},function(e,docs){
        res.send(docs);
    });
});
*/

/**
 * @swagger
 * /api/brokerportfolio/assets/{id}:
 *   get:
 *     tags:
 *       - Assets
 *     description: Returns a single Asset
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Asset's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single asset
 *         schema:
 *           $ref: '#/definitions/Asset'
 */
router.get('/api/brokerportfolio/assets/:id', db.getAssetsById);

/**
 * @swagger
 * /api/brokerportfolio/assets/{name}/{date}:
 *   get:
 *     tags:
 *       - Assets
 *     description: Returns a single asset with name and date
 *     produces:
 *       - application/json
 *     parameters:
 *        - name: name
 *          in: path
 *          description: Puppy'name
 *          required: true
 *          type: string
 *        - name: createDate
 *          in: path
 *          description: Puppy'add
 *          required: true
 *          type: string
 *     responses:
 *       200:
 *         description: A single asset
 *         schema:
 *           $ref: '#/definitions/Asset'
 */

router.get('/api/brokerportfolio/assets/:name/:createDate', db.getSingleAssetByName);


/**
 * @swagger
 * /api/brokerportfolio/assets:
 *   post:
 *     tags:
 *       - Assets
 *     description: Creates a new asset
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: asset
 *         description: Asset object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Asset'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/api/brokerportfolio/assets', db.createAsset);

/**
 * @swagger
 * /api/brokerportfolio/assets/{id}:
 *   put:
 *     tags:
 *       - Assets
 *     description: Updates a single asset
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Asset's id
 *         in: path
 *         required: true
 *         type: integer
 *       - name: asset
 *         description: Asset object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Asset'
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/api/brokerportfolio/assets/:id', db.updateAsset);

/**
 * @swagger
 * /api/brokerportfolio/assets/{id}:
 *   delete:
 *     tags:
 *       - Assets
 *     description: Deletes a single asset
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Asset's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/api/brokerportfolio/assets/:id', db.removeAsset);

//---------------------------------------------------------------------------


/**
 * @swagger
 * definition:
 *   Liability:
 *     properties:
 *       liabilityId:
 *         type: string
 *       liabilityCategory:
 *         type: string
 *       liabilityPremium:
 *         type: integer
 *       customerId:
 *         type: string
 *       liabilityTenure:
 *         type: string
 *       annuityTerm:
 *         type: date
 *       interestRate:
 *         type: integer
 *       description:
 *         type: string
 *       isPaymentDefaulter:
 *         type: string
 *       purchaseDate:
 *         type: string
 *       repayStartDate:
 *         type: string
 *       principalValue:
 *         type: string
 */

/**
 * @swagger
 * /api/brokerportfolio/liability:
 *   get:
 *     tags:
 *       - Liability
 *     description: Returns all assets
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of assets
 *         schema:
 *           $ref: '#/definitions/Liability'
 */


router.get('/api/brokerportfolio/liability', db.getAllLiabilities);

/*router.get('/api/brokerportfolio', function(req, res) {
    var db = req.db;
    var collection = db.get('asset_details');
    
    
    collection.find({},{},function(e,docs){
        res.send(docs);
    });
});
*/

/**
 * @swagger
 * /api/brokerportfolio/liability/{id}:
 *   get:
 *     tags:
 *       - Liability
 *     description: Returns a single Liability
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Liability's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single Liability
 *         schema:
 *           $ref: '#/definitions/Liability'
 */
router.get('/api/brokerportfolio/liability/:id', db.getLiabilityById);

/**
 * @swagger
 * /api/brokerportfolio/liability/{name}/{date}:
 *   get:
 *     tags:
 *       - Liability
 *     description: Returns a single Liability with name and date
 *     produces:
 *       - application/json
 *     parameters:
 *        - name: name
 *          in: path
 *          description: Liability'name
 *          required: true
 *          type: string
 *        - name: createDate
 *          in: path
 *          description: Liability'add
 *          required: true
 *          type: string
 *     responses:
 *       200:
 *         description: A single Liability
 *         schema:
 *           $ref: '#/definitions/Liability'
 */

router.get('/api/brokerportfolio/liability/:name/:createDate', db.getSingleLiabilityByName);


/**
 * @swagger
 * /api/brokerportfolio/liability:
 *   post:
 *     tags:
 *       - Liability
 *     description: Creates a new Liability
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: liability
 *         description: Liability object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Liability'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/api/brokerportfolio/liability/', db.createLiability);

/**
 * @swagger
 * /api/brokerportfolio/liability/{id}:
 *   put:
 *     tags:
 *       - Liability
 *     description: Updates a single Liability
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Liability's id
 *         in: path
 *         required: true
 *         type: integer
 *       - name: asset
 *         description: Liability object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Liability'
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/api/brokerportfolio/liability/:id', db.updateLiability);

/**
 * @swagger
 * /api/brokerportfolio/liability/{id}:
 *   delete:
 *     tags:
 *       - Liability
 *     description: Deletes a single Liability
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Liability's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/api/brokerportfolio/liability/:id', db.removeLiability);

module.exports = router;

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var swaggerJSDoc = require('swagger-jsdoc');

//var mongo = require('mongodb');
//var monk = require('monk');
//var db = monk('localhost:27017/node_mongo');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1/node_mongo');

mongoose.model('asset_details',  new Schema({ assetId: String, assetCategory: String, purchasePrice: Number,customerId: String,
              dateSold: String,units: String,description: String,remark: String,assetTenure: String,interestRate: String,currencyCode: String}), 
               'asset_details');
mongoose.model('liability_details',  new Schema({ liabilityId: String, liabilityCategory: String, liabilityPremium: Number,customerId: String,
              liabilityTenure: String,annuityTerm: String,interestRate: String,description: String,isPaymentDefaulter: String,
              purchaseDate: String,repayStartDate: String,principalValue: String}), 
               'liability_details');

/*require('./models/asset_details');
require('./models/liability_details');
require('./models/personal_details');*/


var routes  = require('./routes/index');
var users = require('./routes/users');
var assets = require('./routes/assets');
var hello_world = require('./routes/hello_world');


var app = express();

// swagger definition
var swaggerDefinition = {
  info: {
    title: 'Node Swagger API',
    version: '1.0.0',
    description: 'Demonstrating how to desribe a RESTful API with Swagger',
  },
  host: 'localhost:3000',
  basePath: '/',
};


// options for the swagger docs
var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./routes/*.js'],
};

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Make our db accessible to our router
app.use(function(req,res,next){
    console.log(" db connection ")
    //req.db = db;
    var assetCol = mongoose.model('asset_details');
    var liabilityCol = mongoose.model('liability_details');
    /*var personalCol = mongoose.model('personal_details');*/
    req.assetCol = assetCol;
    req.liabilityCol = liabilityCol;/*

    req.liabilityCol = liabilityCol;
    req.personalCol = personalCol;*/
    next();
});




app.use('/', routes );
app.use('/users', users);
app.use('/assets', assets);
app.use('/hello_world', hello_world);

app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

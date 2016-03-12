var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PML Demo' });
});

/* GET API Request */
router.get('/api/v1/similar/', function(req, res, next) {
  url = req.query.url
  products = [url, url, url]
  res.render('showcase', { title: 'Showcase', original_url: url, similar_products: products });
});

/* GET NN Request */
router.get('/explorer/', function(req, res, next) {
  if(req.query.offset){
  	offset = parseInt(req.query.offset)
  }else{
  	offset=0
  }
  var fs = require('fs');
  var path = require('path');
  var appDir = path.dirname(require.main.filename);
  var obj = JSON.parse(fs.readFileSync(appDir+'/../public/data/data.json', 'utf8'));
  obj = obj.slice(offset, offset+5)
  res.render('explorer', { title: 'Explorer', data_obj: obj, next_offset: offset+5});
});

module.exports = router;

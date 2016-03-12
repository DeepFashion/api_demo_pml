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

module.exports = router;

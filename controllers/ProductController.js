require('../models/ProductSchema');

var mongoose = require('mongoose');
var Product = mongoose.model('products');

exports.getProduct = function(req, res) {
  Product.find({}, (err, product) => {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.createProduct = function(req, res) {
  var newProduct = new Product(req.body);
  newProduct.save((err, product) =>{
    if (err)
      res.send(err);
    res.status(200)
    .json(product);
  });
};
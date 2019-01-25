const _ = require('lodash');
const Product = require('../models/Product');

exports.get = (req, res, next) => {
  Product.findById(req.params.productId)
    .then(products => res.json(products))
    .catch(e => next(e));
};

exports.list = (req, res, next) => {
  const { limit = 50, skip = 0 } = req.query;
  Product.list({ limit, skip })
    .then(products => res.json(products))
    .catch(e => next(e));
};

exports.create = (req, res, next) => {
  const product = new Product(req.body.data);

  product
    .save()
    .then(savedProduct => res.json(savedProduct))
    .catch(e => next(e));
};

exports.update = async (req, res, next) => {
  Product.findByIdAndUpdate(req.params.productId, { $set: req.body.data }, { new: true }).then(
    savedProduct => res.json(savedProduct)
  );
};

exports.remove = async (req, res, next) => {
  const { id, ...data } = req.body.data;

  Product.findByIdAndUpdate(id, { $set: data }, { new: true }).then(savedProduct =>
    res.json(savedProduct)
  );
};

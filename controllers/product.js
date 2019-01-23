const Product = require('../models/Product');

exports.list = (req, res, next) => {
  const { limit = 50, skip = 0 } = req.query;
  Product.list({ limit, skip })
    .then(products => res.json(products))
    .catch(e => next(e));
};

exports.create = (req, res, next) => {
  const user = new Product(req.body.data);

  user
    .save()
    .then(savedProduct => res.json(savedProduct))
    .catch(e => next(e));
};

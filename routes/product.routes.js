const express = require('express');
const productCtrl = require('../controllers/product.controller');

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')
  /** GET /api/products - Get list of products */
  .get(productCtrl.list)

  /** POST /api/products - Create new product */
  .post(productCtrl.create);

router
  .route('/:productId')
  /** GET /api/products/:productId - Get product */
  .get(productCtrl.get)

  /** PUT /api/products/:productId - Update product */
  .put(productCtrl.update)

  /** DELETE /api/products/:productId - Delete product */
  .delete(productCtrl.delete);

module.exports = router;

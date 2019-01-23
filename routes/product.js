const express = require('express');
const productCtrl = require('../controllers/product');

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')
  /** GET /api/users - Get list of users */
  .get(productCtrl.list)

  /** POST /api/users - Create new user */
  .post(productCtrl.create);

module.exports = router;

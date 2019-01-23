const express = require('express');
const productRoutes = require('./product');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => res.send('OK'));

// mount product routes at /products
router.use('/products', productRoutes);

module.exports = router;

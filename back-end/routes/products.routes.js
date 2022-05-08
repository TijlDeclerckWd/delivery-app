const express = require('express');

const { products } = require('../controllers');

const router = express.Router();

// Add new post
router.post('/', products.add);

module.exports = router;
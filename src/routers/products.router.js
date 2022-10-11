const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products.controller');

router.get('/', productsController.listAll);

router.get('/:id', productsController.listById);

module.exports = router;
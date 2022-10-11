const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products.controller');

const productsValidation = require('../middlewares/validateProductInputs');

router.get('/', productsController.listAll);
router.get('/:id', productsController.listById);
router.post('/', productsValidation.validateName, productsController.saveProduct);

module.exports = router;
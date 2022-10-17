const express = require('express');

const router = express.Router();

const salesController = require('../controllers/sales.controller');

const salesValidation = require('../middlewares/validateSalesInputs');

router.get('/', salesController.getSales);
router.get('/:id', salesController.getSalesById);
router.delete('/:id', salesController.deleteSaleWithId);
router.put(
  '/:id',
  salesValidation.validateIdInput,
  salesValidation.validateQuantityInput,
  salesController.checkValidProductId,
  salesController.updateSale,
);
router.post(
  '/',
  salesValidation.validateIdInput,
  salesValidation.validateQuantityInput,
  salesController.checkValidProductId,
  salesController.saveSale,
);

module.exports = router;
const salesService = require('../services/sales.service');

const saveSale = async (req, res) => {
  const saleId = await salesService.saveSales(req.body);
  res.status(201).json({ id: saleId, itemsSold: req.body });
};

const getSales = async (_req, res) => {
  const sales = await salesService.getSales();
  res.status(200).json(sales);
};

const getSalesById = async (req, res) => {
  const sales = await salesService.getSalesById(req.params.id);
  if (!sales.length) return res.status(404).json({ message: 'Sale not found' }); 
  res.status(200).json(sales);
};

const checkValidProductId = async (req, res, next) => {
  const { body } = req;
  const allValid = await salesService.validateProductId(body);
  if (!allValid) {
    res.status(404).json({ message: 'Product not found' });
  } else {
    next();
  }
};

module.exports = {
  saveSale,
  getSales,
  getSalesById,
  checkValidProductId,
};
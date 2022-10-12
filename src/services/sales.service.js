const salesModel = require('../models/sales.model');

const validateProductId = async (sales) => {
  const idSearch = await Promise.all(await sales.map((sale) => 
    salesModel.checkIfIdExists(sale.productId)));
  return idSearch.every((test2) => test2.length > 0);
};

const saveSales = async (saleItems) => {
  await salesModel.saveSale();
  const saleId = await salesModel.getSaleId();
  await Promise.all(saleItems.map(({ productId, quantity }) =>
    salesModel.saveSaleItem(saleId, productId, quantity)));
  return saleId;
};

const getSales = async () => {
  const sales = await salesModel.getSales();
  return sales;
};

module.exports = {
  saveSales,
  getSales,
  validateProductId,
};
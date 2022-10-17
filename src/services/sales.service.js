const camelize = require('camelize');
const salesModel = require('../models/sales.model');

const validateProductId = async (sales) => {
  const idSearch = await Promise.all(await sales.map((sale) => 
    salesModel.checkIfIdExists(sale.productId)));
  return idSearch.every((id) => id.length > 0);
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
  const salesObj = await Promise.all(sales.map(async (sale) => {
    const date = await salesModel.getSaleDate(sale.sale_id);
    return { date, ...sale };
  }));
  return camelize(salesObj);
};

const getSalesById = async (id) => {
  const sales = camelize(await salesModel.getSalesById(id));
  if (!sales.length) return sales;
  const date = await salesModel.getSaleDate(id);
  const salesObj = sales.map((sale) => {
    const { quantity, productId } = sale;
    return { date, productId, quantity };
  });
  return camelize(salesObj);
};

const deleteSaleWithId = async (id) => {
  await salesModel.deleteSaleWithId(id);
};

const updateSale = async (id, sales) => {
  await Promise.all(
    sales.map((sale) => {
      const { quantity, productId } = sale;
      return salesModel.updateSale(quantity, productId, id);
    }),
  );
};

module.exports = {
  saveSales,
  getSales,
  validateProductId,
  getSalesById,
  deleteSaleWithId,
  updateSale,
};
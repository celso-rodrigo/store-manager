const productsModel = require('../models/products.model');

const getAllProducts = async () => {
  const allProducts = await productsModel.getAllProducts();
  return allProducts;
};

const getProductById = async (id) => {
  const productById = await productsModel.getProductById(id);
  return productById;
};

module.exports = {
  getAllProducts,
  getProductById,
};
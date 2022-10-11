const productsModel = require('../models/products.model');

const getAllProducts = async () => {
  const allProducts = await productsModel.getAllProducts();
  return allProducts;
};

const getProductById = async (id) => {
  const productById = await productsModel.getProductById(id);
  return productById;
};

const saveProduct = async (product) => {
  const savedProduct = await productsModel.saveProduct(product);
  return savedProduct;
};

module.exports = {
  getAllProducts,
  getProductById,
  saveProduct,
};
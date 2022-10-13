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

const updateProduct = async (productName, id) => {
  const affectedRows = await productsModel.updateProduct(productName, id);
  return affectedRows;
};

module.exports = {
  getAllProducts,
  getProductById,
  saveProduct,
  updateProduct,
};
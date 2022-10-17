const productsModel = require('../models/products.model');

const getAllProducts = async () => (productsModel.getAllProducts());

const getProductById = async (id) => (productsModel.getProductById(id));

const saveProduct = async (product) => (productsModel.saveProduct(product));

const updateProduct = async (productName, id) => (productsModel.updateProduct(productName, id));

const deleteProduct = async (id) => (productsModel.deleteProduct(id));

const searchByTerm = async (query) => (productsModel.searchByTerm(query));

module.exports = {
  getAllProducts,
  getProductById,
  saveProduct,
  updateProduct,
  deleteProduct,
  searchByTerm,
};
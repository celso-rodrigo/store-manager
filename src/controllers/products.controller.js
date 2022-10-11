const productsService = require('../services/products.service');

const listAll = async (_req, res) => {
  const allProducts = await productsService.getAllProducts();
  res.status(200).json(allProducts);
};

const listById = async (req, res) => {
  const { id } = req.params;
  const productById = await productsService.getProductById(id);
  if (!productById) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(productById);
};

module.exports = {
  listAll,
  listById,
};
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

const saveProduct = async (req, res) => {
  const { name } = req.body;
  const savedProduct = await productsService.saveProduct(name);
  res.status(201).json({ id: savedProduct.insertId, name });
};

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const affectedRows = await productsService.updateProduct(name, id);
  if (affectedRows !== 1) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json({ id, name });
};

const deleteProduct = async (req, res) => {
  const id = Number(req.params.id);
  const affectedRows = await productsService.deleteProduct(id);
  if (affectedRows !== 1) return res.status(404).json({ message: 'Product not found' });
  res.status(204).end();
};

module.exports = {
  listAll,
  listById,
  saveProduct,
  updateProduct,
  deleteProduct,
};
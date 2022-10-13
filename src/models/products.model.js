const connection = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const getProductById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return result;
};

const saveProduct = async (productName) => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [productName],
  );
  return result;
};

const updateProduct = async (name, id) => {
  const [result] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [name, id],
  );
  return result.affectedRows;
};

module.exports = {
  getAllProducts,
  getProductById,
  saveProduct,
  updateProduct,
};
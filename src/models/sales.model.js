const connection = require('./connection');

const saveSale = async () => {
  await connection.execute(
    'INSERT INTO StoreManager.sales () VALUES ()',
  );
};

const saveSaleItem = async (saleId, productId, quantity) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity],
  );
};

const getSales = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.sales_products ORDER BY sale_id, product_id',
  );
  return result;
};

const getSalesById = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.sales_products WHERE sale_id = ? ORDER BY sale_id, product_id',
    [id],
  );
  return result;
};

const getSaleDate = async (id) => {
  const [result] = await connection.execute(
    'SELECT date FROM StoreManager.sales WHERE id = ?',
    [id],
  );
  return result[0].date;
};

const checkIfIdExists = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.sales WHERE id = ?',
    [id],
  );
  return result;
};

const getSaleId = async () => {
  const [result] = await connection.execute(
    'SELECT id FROM StoreManager.sales ORDER BY id DESC LIMIT 1',
  );
  return result[0].id;
};

const deleteSaleWithId = async (id) => {
  await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = ?',
    [id],
  );
};

const updateSale = async (quantity, productId, id) => {
  await connection.execute(
    'UPDATE StoreManager.sales_products SET quantity = ? WHERE product_id = ? AND sale_id = ?',
    [quantity, productId, id],
  );
};

module.exports = {
  saveSale,
  saveSaleItem,
  getSales,
  getSalesById,
  getSaleDate,
  checkIfIdExists,
  getSaleId,
  deleteSaleWithId,
  updateSale,
};
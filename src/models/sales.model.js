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
    'SELECT * FROM StoreManager.sales_products',
  );
  return result;
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

module.exports = {
  saveSale,
  saveSaleItem,
  getSales,
  checkIfIdExists,
  getSaleId,
};
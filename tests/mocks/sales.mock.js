const salesWithDate = [
  {
    date: '2022-10-13T19:26:44.000Z',
    productId: 1,
    quantity: 5
  },
  {
    date: '2022-10-13T19:26:44.000Z',
    productId: 2,
    quantity: 10
  }
];

const salesById = [
  {
    product_id: 1,
    quantity: 5
  },
  {
    product_id: 2,
    quantity: 10
  }
];

const saleRequestBody = [
  {
    productId: 1,
    quantity: 1
  },
  {
    productId: 2,
    quantity: 5
  }
];

const allSales = [
  { sale_id: 1, product_id: 1, quantity: 5 },
  { sale_id: 1, product_id: 2, quantity: 10 },
  { sale_id: 2, product_id: 3, quantity: 15 },
];

const allSalesCamilized = [
  {
    date: '2022-10-13T21:31:40.000Z',
    saleId: 1,
    productId: 1,
    quantity: 5
  },
  {
    date: '2022-10-13T21:31:40.000Z',
    saleId: 1,
    productId: 2,
    quantity: 10
  },
  {
    date: '2022-10-13T21:31:40.000Z',
    saleId: 2,
    productId: 3,
    quantity: 15
  }
];

const saleItems = [ { productId: 1, quantity: 1 }, { productId: 2, quantity: 5 } ];

const resultIfExists = { id: 1, date: '2022-10-13T19:26:44.000Z'};

const resultId = [{ id: 1}];

module.exports = {
  salesById,
  resultIfExists,
  resultId,
  saleRequestBody,
  saleItems,
  allSales,
  salesWithDate,
  allSalesCamilized,
};
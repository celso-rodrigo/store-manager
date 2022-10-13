const allProductsMock = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const allSalesMock = [
  {
    date: '2022-10-13T19:26:44.000Z',
    saleId: 1,
    productId: 1,
    quantity: 5
  },
  {
    date: '2022-10-13T19:26:44.000Z',
    saleId: 1,
    productId: 2,
    quantity: 10
  },
  {
    date: '2022-10-13T19:26:44.000Z',
    saleId: 2,
    productId: 3,
    quantity: 15
  }
];

const salesRequestBody = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  }
];

const saveProductMock = [{ insertId: 10, affectedRows: 1}, null];

module.exports = {
  allProductsMock,
  saveProductMock,
  allSalesMock,
  salesRequestBody,
};
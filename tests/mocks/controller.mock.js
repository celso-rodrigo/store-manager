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

const saveProductMock = [{ insertId: 10, affectedRows: 1}, null];

module.exports = {
  allProductsMock,
  saveProductMock,
};
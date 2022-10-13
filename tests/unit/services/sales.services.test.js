const { expect } = require('chai');
const sinon = require('sinon');

const salesService = require('../../../src/services/sales.service');
const salesModel = require('../../../src/models/sales.model');
const camelize = require('camelize');

const { 
  salesById,
  saleRequestBody,
  saleItems,
  allSales,
  salesWithDate,
  allSalesCamilized,
} = require('../../mocks/sales.mock');

describe('Unit tests of products services', function () {
  afterEach(sinon.restore);

  it('Should return true when all arrays aren\'t empty', async function () {
    sinon.stub(salesModel, 'checkIfIdExists').resolves(salesById);
    
    const result = await salesService.validateProductId(saleRequestBody);

    expect(result).to.equal(true);
  });

  it('Should return the sale ID', async function () {
    sinon.stub(salesModel, 'saveSale');
    sinon.stub(salesModel, 'saveSaleItem');
    sinon.stub(salesModel, 'getSaleId').resolves(4);
    
    const result = await salesService.saveSales(saleItems);

    expect(result).to.equal(4);
  });

  it('Should return all sales camelized', async function () {
    sinon.stub(salesModel, 'getSales').resolves(allSales);
    sinon.stub(salesModel, 'getSaleDate').resolves('2022-10-13T21:31:40.000Z');

    const result = camelize(await salesService.getSales());

    expect(result).to.deep.equal(allSalesCamilized);
  });

  it('Should return all sales with right id camelized', async function () {
    sinon.stub(salesModel, 'getSalesById').resolves(salesById);
    sinon.stub(salesModel, 'getSaleDate').resolves('2022-10-13T19:26:44.000Z');
    
    const result = camelize(await salesService.getSalesById(1));

    expect(result).to.deep.equal(salesWithDate);
  });

  it('Should return an empty array when no id is found', async function () {
    sinon.stub(salesModel, 'getSalesById').resolves([]);   
    
    const result = await salesService.getSalesById(1);

    expect(result).to.deep.equal([]);
  });
});
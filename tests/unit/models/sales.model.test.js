const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');

const salesModel = require('../../../src/models/sales.model');

const {
  salesById,
  resultIfExists,
  resultId,
} = require('../../mocks/sales.mock');

describe('Unit tests of products model', function () {
  afterEach(sinon.restore);

  it('Should resolve freely', async function () {
    sinon.stub(connection, 'execute').resolves();
    await salesModel.saveSale();
  });

  it('Should resolve freely', async function () {
    sinon.stub(connection, 'execute').resolves();
    await salesModel.saveSaleItem();
  });

  it('Should return all sales with the right id', async function () {
    sinon.stub(connection, 'execute').resolves([salesById, null]);

    const result = await salesModel.getSalesById();

    expect(result).to.equal(salesById);
  });

  it('Should return the sale date', async function () {
    const date = '2022-10-13T19:26:44.000Z';
    sinon.stub(connection, 'execute').resolves([[{date}], null]);

    const result = await salesModel.getSaleDate();

    expect(result).to.equal(date);
  });

  it('Should return the id and date', async function () {
    sinon.stub(connection, 'execute').resolves([resultIfExists, null]);

    const result = await salesModel.checkIfIdExists();

    expect(result).to.equal(resultIfExists);
  });

  it('Should return the id', async function () {
    sinon.stub(connection, 'execute').resolves([resultId, null]);

    const result = await salesModel.getSaleId();

    expect(result).to.equal(1);
  });
});
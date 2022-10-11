const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');

const productsModel = require('../../../src/models/products.model');

const { allProductsMock } = require('../../mocks/controller.mock');

describe('Unit tests of products model', function () {
  afterEach(sinon.restore);

  it('Should return all products', async function () {
    sinon.stub(connection, 'execute').resolves([allProductsMock, null]);

    const result = await productsModel.getAllProducts();

    expect(result).to.equal(allProductsMock);
  });

  it('Should return the right product', async function () {
    sinon.stub(connection, 'execute').resolves([allProductsMock, null]);

    const result = await productsModel.getProductById();

    expect(result).to.equal(allProductsMock[0]);
  });
});

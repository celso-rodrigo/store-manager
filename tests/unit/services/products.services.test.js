const { expect } = require('chai');
const sinon = require('sinon');

const productsService = require('../../../src/services/products.service');
const productsModel = require('../../../src/models/products.model');

const { allProductsMock } = require('../../mocks/controller.mock');

describe('Unit tests of products services', function () {
  afterEach(sinon.restore);

  it('Should return all products', async function () {
    sinon.stub(productsModel, 'getAllProducts').resolves(allProductsMock);

    const result = await productsService.getAllProducts();

    expect(result).to.equal(allProductsMock);
  });

  it('Should return the right product', async function () {
    sinon.stub(productsModel, 'getProductById').resolves(allProductsMock[0]);

    const result = await productsService.getProductById();

    expect(result).to.equal(allProductsMock[0]);
  });
});

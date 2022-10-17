const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productsController = require('../../../src/controllers/products.controller');
const productService = require('../../../src/services/products.service');

const { allProductsMock } = require('../../mocks/controller.mock');

const { productNotFound } = require('../../mocks/json.mock')

describe('Unit tests of products controller', function () {
  afterEach(sinon.restore);

  describe('Tests of GET "/products"', function () {
    it('Should return a JSON with all the products and status 200', async function () {
      const req = {};
      const res = {};
  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
  
      sinon.stub(productService, 'getAllProducts').resolves(allProductsMock);
  
      await productsController.listAll(req, res);
  
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(allProductsMock);
    });
  });

  describe('Tests of GET "/products/:id"', function () {
    it('Should return a JSON with the right product and status 200', async function () {
      const req = {params : { id: 1 }, query: { q: undefined }};
      const res = {};
  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
  
      sinon.stub(productService, 'getProductById').resolves(allProductsMock[0]);
  
      await productsController.listById(req, res);
  
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(allProductsMock[0]);
    });
  
    it('Should return a JSON with a message and status 404', async function () {
      const req = {params : { id: 999 }, query: { q: undefined }};
      const res = {};
  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
  
      sinon.stub(productService, 'getProductById').resolves(undefined);
  
      await productsController.listById(req, res);
  
      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith(productNotFound);
    });
  })  

  describe('Tests of POST "/products/"', function () {
    it('Should return a JSON with the product ID and name and the status 201', async function () {
      const name = 'Card game';
      const req = { body: { name } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'saveProduct').resolves({ insertId: 10 });

      await productsController.saveProduct(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith({
        id: 10,
        name,
      });
    });
  });

  describe('Tests of PUT "/products/:id"', function () {
    it('Should return a JSON with the right product and status 200', async function () {
      const name = 'Card game';
      const req = { body: { name }, params: { id:  1 }};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'updateProduct').resolves(1);

      await productsController.updateProduct(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith({
        id: 1,
        name,
      });
    });

    it('Should return a JSON with a message and status 404', async function () {
      const name = 'Card game';
      const req = { body: { name }, params: { id:  999 }};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'updateProduct').resolves(0);

      await productsController.updateProduct(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith(productNotFound);
    });
  });

  describe('Tests of DELETE "/products/:id"', function () {
    it('Should return the status 204', async function () {
      const name = 'Card game';
      const req = { body: { name }, params: { id:  1 }};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      res.end = sinon.stub().returns();

      sinon.stub(productService, 'deleteProduct').resolves(1);

      await productsController.deleteProduct(req, res);

      expect(res.status).to.have.been.calledWith(204);
    });

    it('Should return a JSON with a message and status 404', async function () {
      const name = 'Card game';
      const req = { params: { id:  999 }};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'deleteProduct').resolves(0);

      await productsController.deleteProduct(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith(productNotFound);
    });
  });
});

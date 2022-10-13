const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const salesController = require('../../../src/controllers/sales.controller');
const salesService = require('../../../src/services/sales.service');

const { allSalesMock, salesRequestBody } = require('../../mocks/controller.mock');

describe('Unit tests of sales controller', function () {
  afterEach(sinon.restore);

  describe(
    'Tests of GET "/sales"', function () {
    it('Should return a JSON with all the sales and status 200', async function () {
      const req = {};
      const res = {};
  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
  
      sinon.stub(salesService, 'saveSales').resolves(allSalesMock);
  
      await salesController.getSales(req, res);
  
      expect(res.status).to.have.been.calledWith(200);
    });
  });

  describe('Tests of GET "/sales/:id"', function () {
    it('Should return a JSON with the right product and status 200', async function () {
      const req = {params : { id: 1 }};
      const res = {};
  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
  
      sinon.stub(salesService, 'getSalesById').resolves([allSalesMock[2]]);

      await salesController.getSalesById(req, res);
  
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith([allSalesMock[2]]);
    });
    
  it('Should return a JSON with a message and status 404', async function () {
    const req = {params : { id: 999 }};
    const res = {};
  
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  
    sinon.stub(salesService, 'getSalesById').resolves([]);
  
    await salesController.getSalesById(req, res);
  
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Sale not found' });
  });
  });

  describe('Tests of POST "/sales/"', function () {
    it('Should resolve with a valid body', async function () {
      const req = { body: { salesRequestBody } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      next = sinon.stub();

      sinon.stub(salesService, 'validateProductId').resolves(true);

      await salesController.checkValidProductId(req, res, next);
    });

    it('Should return a JSON with a message and status 404', async function () {
      const req = { body: { } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, 'validateProductId').resolves(false);

      await salesController.checkValidProductId(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: 'Product not found' });  
    });

    it('Should return a JSON with the sale info and status 201', async function () {
      const req = { body: { salesRequestBody } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, 'saveSales').resolves(3);

      await salesController.saveSale(req, res);

      expect(res.status).to.have.been.calledWith(201);
    });
  });
});

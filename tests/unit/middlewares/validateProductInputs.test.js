const { expect } = require('chai');
const sinon = require('sinon');

const validateInputs = require('../../../src/middlewares/validateProductInputs');

describe('Unit tests of validate Product Inputs', function () {
  afterEach(sinon.restore);

  it('should return an error messagem when an invalid name type is sent and the status 400', async function () {
    const req = { body: { name: 12345 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await validateInputs.validateName(req, res);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: 'Nome inválido.' });
  });

  it('should return an error messagem when an empty name is sent and the status 400', async function () {
    const req = { body: { name: '' } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await validateInputs.validateName(req, res);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({
      message: 'O campo nome é obrigatório.',
    });
  });
}); 
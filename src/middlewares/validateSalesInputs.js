const validateIdInput = (req, res, next) => {
  const { body } = req;
  if (!(body.every((sale) => sale.productId))) {
    res.status(400).json({ message: '"productId" is required' });
  } else {
    next();
  }
};

const validateQuantityInput = (req, res, next) => {
  const { body } = req;
  if (!(body.every((sale) => typeof sale.quantity === 'number'))) {
    res.status(400).json({ message: '"quantity" is required' });
  }
  if (!(body.every((sale) => sale.quantity > 0))) {
    res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  } else {
    next();
  }
};

module.exports = {
  validateIdInput,
  validateQuantityInput,
};
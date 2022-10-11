const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'O campo nome é obrigatório.' });
  }
  if (typeof name !== 'string' || !name.length) {
    return res.status(400).json({ message: 'Nome inválido.' });
  }
  next();
};

module.exports = {
  validateName,
};

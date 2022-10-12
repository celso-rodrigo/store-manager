const express = require('express');
require('express-async-errors');
const routers = require('./routers');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', routers.productsRoutes);
app.use('/sales', routers.salesRoutes);

app.use((err, _req, res, _next) => {
  res
    .status(500)
    .json({ message: err.message });
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;
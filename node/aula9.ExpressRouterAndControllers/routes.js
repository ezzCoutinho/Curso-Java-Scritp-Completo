const express = require('express');
// adicionando Router para agrupar todas as routes
const route = express.Router();
//exportando req and res from home
const homeController = require('./controllers/homeController');
//exportando req and res from contact us
const contactController = require('./controllers/contactController')

// rotas do home

route.get('/', homeController.paginaInicial);

route.post('/', homeController.postPaginaInicial);

route.get('/testes/:idUsuario?/:nameUser?', homeController.getParmsBodyQueryPaginaInicial);

// Rotas de contato

route.get('/contatos', contactController.contatoInicial);

route.post('/contatos', contactController.postContatoInicial);

// exportando todas routes
module.exports = route;
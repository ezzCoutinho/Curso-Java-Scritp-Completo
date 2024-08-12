const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController')

route.get('/', homeController.paginaInicial);

route.post('/', homeController.postPaginaInicial);

route.get('/testes/:idUsuario?/:nameUser?', homeController.getParmsBodyQueryPaginaInicial);

route.get('/contatos', contactController.contatoInicial);

route.post('/contatos', contactController.postContatoInicial);

module.exports = route;









// const meuMiddleware = (req, res, next) => {
//     req.session = {nome: 'Luiz', sobrenome:'Miranda'};
//     console.log();
//     console.log('Passei no seu middleware.');
//     console.log();
//     next();
// }
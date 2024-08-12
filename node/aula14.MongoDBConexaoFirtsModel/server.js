// importa o dotenv
require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conexão foi estabelecida: BASE DE DADOS');
        app.emit('pronto');
    })
    .catch(error => {
        console.error('ERROR: ',error);
    });
    
const porta = 3000;
const path = require('path');
const routes = require(path.resolve(__dirname, 'routes.js'));
const middlewareGlobal = require(path.resolve(__dirname, 'src', 'middlewares', 'middlewares.js'));


app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));

app.set('view engine', 'ejs');

app.use(middlewareGlobal.middlewareNomeSobrenome);

app.use(routes);

app.on('pronto', () => {
    app.listen(porta, () => {
        console.log(`Clique para acessar o servidor local: http://localhost:${porta}`);
        console.log(`Servidor sendo executado na porta ${porta}`);
    });
});




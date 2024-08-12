const express = require('express');
const app = express();
const porta = 3000;
const routes = require('./routes');
const path = require('path');
const { dir } = require('console');
const middlewareGlobal = require(path.resolve(__dirname, 'src', 'middlewares', 'middlewares.js'));


app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));

app.set('view engine', 'ejs');

app.use(middlewareGlobal.middlewareNomeSobrenome);

app.use(routes);

app.listen(porta, () => {
    console.log(`Clique para acessar o servidor local: http://localhost:${porta}`);
    console.log(`Servidor sendo executado na porta ${porta}`);
});


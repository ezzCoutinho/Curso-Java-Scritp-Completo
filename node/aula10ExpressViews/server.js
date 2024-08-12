const express = require('express');
const app = express();
const porta = 3000;
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.set('views', path.resolve(__dirname, 'src', 'views'));

app.set('view engine', 'ejs');

app.use(routes);

app.listen(porta, () => {
    console.log(`Clique para acessar o servidor local: http://localhost:${porta}`);
    console.log(`Servidor sendo executado na porta ${porta}`);
});


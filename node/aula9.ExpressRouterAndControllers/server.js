// exportanto o pacote express
const express = require('express');
// vinculando express a constante app
const app = express();
// definindo uma porta entre 3000~4000
const porta = 3000;
// importando todas as routes
const routes = require('./routes')

//tratando todas as requisições
app.use(express.urlencoded({ extended: true }));

//executando todas as rotas
app.use(routes);

//iniciando o servidor, package ja com nodemon: script: start
app.listen(porta, () => {
    console.log(`Clique para acessar o servidor local: http://localhost:${porta}`);
    console.log(`Servidor sendo executado na porta ${porta}`);
});

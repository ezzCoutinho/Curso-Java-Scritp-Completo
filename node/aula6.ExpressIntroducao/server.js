const express = require('express');
const server = express();

//          Cria   ler  atualiza  apaga
// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST     GET    PUT   DELETE

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

server.get('/', (request, response) => {
    response.send(
        `
       <form action ="/" method = "POST">
            Nome: <input type = "text" name = "name">
                <button>Enviar</button>
            </input>
        </form>

       `);
});
server.get('/sobre', (request, response) => {
    response.send('Já se foi o disco voador.');
});

server.post('/', (req, res) =>{
    res.send('Formulário recebido com sucesso!')
})
const porta = 3555;

server.listen(porta, () => {
    console.log(`Clique para acessar o servidor local: http://localhost:${porta}`);
    console.log(`Servidor sendo executado na porta ${porta}`);
});

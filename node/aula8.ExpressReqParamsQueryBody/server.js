const express = require('express');
const app = express();
const porta = 3000;

app.use(express.urlencoded({extended:true}));

//               params   ↓      query String ↓    ↓ anotherQS 
// http://fb.com/profiles/534532?campanha=googleads&nome_C=seila

app.get('/', (request, response) => {
    response.send(
        `
       <form action ="/" method = "POST">
            Nome: <input type = "text" name ="nome"><br>
            Sobrenome: <input type = "text" name ="sobrenome">
                <button> Enviar </button>
            </input>
        </form>

       `);
});
app.post('/', (req, res) =>{
    console.log(req.body);
    res.send(`O nome: ${req.body.nome}, sobrenome:${req.body.sobrenome}, serão enviados!`);
});

// params chave   chave2      chave 3
app.get('/testes/:idUsuario?/:nameUser?', (req, res) => {
    // console.log(req.params);
    console.log(req.query);
    // res.send(req.params);
    res.send(req.query.facebook);
})

app.listen(porta, () => {
    console.log(`Clique para acessar o servidor local: http://localhost:${porta}`);
    console.log(`Servidor sendo executado na porta ${porta}`);
});

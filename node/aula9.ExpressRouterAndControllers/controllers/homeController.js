// colocando um formulario na home
module.exports.paginaInicial = (req, res) => {
    res.send(
        `
       <form action ="/" method = "POST">
            Nome: <input type = "text" name ="nome"><br>
            Sobrenome: <input type = "text" name ="sobrenome">
                <button> Enviar </button>
            </input>
        </form>

       `);
}
// colocando os valores inseridos do usuario no body
module.exports.postPaginaInicial =  (req, res) => {
    console.log(req.body);
    res.send(`O nome: ${req.body.nome}, sobrenome:${req.body.sobrenome}, serão enviados!`);
};

// checando params and query(keys and values);
module.exports.getParmsBodyQueryPaginaInicial = (req, res) => {
    // console.log(req.params);
    console.log(req.query);
    // res.send(req.params);
    res.send(req.query);
}


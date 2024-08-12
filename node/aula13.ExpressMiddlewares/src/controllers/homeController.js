// colocando um formulario na home
module.exports.paginaInicial = (req, res, next) => {
    // console.log('Respondendo ao cliente...');
    // console.log();
    res.render('index');
    // console.log(`Olha oq tem na seção nome: ${req.session.nome}`);
    // console.log();
    // next();
    return;
}
// colocando os valores inseridos do usuario no body
module.exports.postPaginaInicial =  (req, res) => {
    console.log(req.body);
    res.send(`O cliente: ${req.body.nome}, com sobrenome de: ${req.body.sobrenome}, serão enviados!`);
};

// checando params and query(keys and values);
module.exports.getParmsBodyQueryPaginaInicial = (req, res) => {
    // console.log(req.params);
    console.log(req.query);
    // res.send(req.params);
    res.send(req.query);
    return;
}


const path = require('path');
const HomeModel = require(path.resolve(__dirname, '..', 'models', 'HomeModel'));

HomeModel.create({
    titulo: 'FLAMENGO VENCEU MAS NÃO CONVENCEU',
    descricao: 'TÁ TUDO RUIM'
}).then(dados => {
        console.log(dados);
    }).catch(e => console.error(e));

module.exports.paginaInicial = (req, res, next) => {
    // console.log('Respondendo ao cliente...');
    // console.log();
    res.render('index');
    // console.log(`Olha oq tem na seção nome: ${req.session.nome}`);
    // console.log();
    // next();
    return;
}
module.exports.postPaginaInicial =  (req, res) => {
    console.log(req.body);
    res.send(`O cliente: ${req.body.nome}, com sobrenome de: ${req.body.sobrenome}, serão enviados!`);
};

module.exports.getParmsBodyQueryPaginaInicial = (req, res) => {
    // console.log(req.params);
    console.log(req.query);
    // res.send(req.params);
    res.send(req.query);
    return;
}


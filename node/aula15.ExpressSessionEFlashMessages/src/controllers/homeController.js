const path = require('path');
const HomeModel = require(path.resolve(__dirname, '..', 'models', 'HomeModel'));

module.exports.paginaInicial = (req, res, next) => {
    console.log(req.session.cliente);
    req.flash('info', 'Eu sou a info da Flash');
    req.flash('error', 'Eu sou o error da Flash');
    req.flash('sucesso', 'Eu sou o sucesso da Flash');
    console.log(req.flash('info'), req.flash('error'), req.flash('sucesso'));
    res.render('index');
    
    return;
}
module.exports.postPaginaInicial =  (req, res) => {
    // console.log(req.body);
    res.send(`Olas cliente: ${req.body.cliente}, iremos salvar a sua seção por 7 dias`);
};

module.exports.getParmsBodyQueryPaginaInicial = (req, res) => {
    // console.log(req.params);
    console.log(req.query);
    // res.send(req.params);
    res.send(req.query);
    return;
}


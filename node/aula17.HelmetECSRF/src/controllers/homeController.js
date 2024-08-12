module.exports.paginaInicial = (req, res, next) => {
    res.render('index', {
        titulo: 'Coloque o seu nome para acessar↓',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        errado: 'TA ERRRADOOOOOOOOOOO'
    });
    return;
}
module.exports.postPaginaInicial = (req, res) => {
    res.send(`Olas cliente: ${req.body.cliente}, iremos salvar a sua seção por 7 dias`);
};

module.exports.getParmsBodyQueryPaginaInicial = (req, res) => {
    console.log(req.query);
    res.send(req.query);
    return;
}


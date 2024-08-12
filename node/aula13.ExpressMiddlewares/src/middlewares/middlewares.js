module.exports.middlewareNomeSobrenome = (req, res, next) => {
    console.log();
    if(req.body.nome) console.log(`Middleware global -> CRIENTE: ${req.body.nome} ${req.body.sobrenome}. Has been sucessfuly`);
    // console.log('Middleware sucessfuly');
    console.log();
    next();
}
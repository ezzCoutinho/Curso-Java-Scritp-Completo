module.exports.middlewareNomeSobrenome = (req, res, next) => {
    console.log();
    res.locals.umaVariavel = 'Este é a middlewareGlobal'
    console.log('>Middleware Global<!');;
    console.log();
    next();
}
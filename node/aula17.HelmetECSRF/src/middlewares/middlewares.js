module.exports.middlewareNomeSobrenome = (req, res, next) => {
    console.log();
    res.locals.titulo = 'Titulo da middleware Global';
    console.log('>Middleware Global<!');;
    console.log();
    next();
}

module.exports.checkCSRFError = (error, req, res, next) => {
    if(error && error.code === 'EBADCSRFTOKEN') {
        return res.render('error');
    }

}

module.exports.csrfMiddleware =(req, res, next) => {

    res.locals.csrfToken = req.csrfToken();

    next();
}
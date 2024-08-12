const path = require('path');
const ContatoModel = require(path.resolve(__dirname, '..', 'models', 'HomeModel.js'));

module.exports.contatoInicial = (req, res) => {
    res.render(`index`);
};


module.exports.postContatoInicial = (req, res) => {
    console.log(req.body);
    res.send(`Em breve entraremos em contato no email: ${req.body.email}`);
};
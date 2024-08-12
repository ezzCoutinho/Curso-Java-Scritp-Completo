// colocando um formulario no contato
const { log } = require('console');
const path = require('path');
const ContatoModel = require(path.resolve(__dirname, '..', 'models', 'HomeModel.js'));
ContatoModel.create({
    titulo: `xai`,
    descricao: 'Olá mundo'
}).then(dados => {
    console.log(dados);
}).catch(error => console.error(error))
module.exports.contatoInicial = (req, res) => {
    res.render(`index`);
};



// colocando os valores inseridos do usuario no body
module.exports.postContatoInicial = (req, res) => {
    console.log(req.body);
    res.send(`Em breve entraremos em contato no email: ${req.body.email}`);
};
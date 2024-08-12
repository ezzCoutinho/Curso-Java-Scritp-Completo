const fs = require('fs').promises;

module.exports = function (caminhoArquivo){
    return fs.readFile(caminhoArquivo, 'utf-8')
}
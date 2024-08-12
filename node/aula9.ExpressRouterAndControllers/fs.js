const fs = require('fs').promises;
const path = require('path');

const caminhoArquivo = path.resolve(__dirname, '..', 'routes.js')

fs.writeFile(caminhoArquivo, '', {encoding: 'utf-8'});
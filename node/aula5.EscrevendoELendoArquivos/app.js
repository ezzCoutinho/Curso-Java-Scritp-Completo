const path = require('path');
const caminhoArquivo =  path.resolve(__dirname, 'teste.json');
const writable = require('./modules/escrever');
const toRead = require('./modules/ler');

// const pessoas = [
//     { nome: 'João'},
//     { nome: 'Roberto'},
//     { nome: 'Luiz'},
//     { nome: 'Carlos'},
// ];
// const json = JSON.stringify(pessoas, '', 2);
// writable(caminhoArquivo, json, 'w');


async function leArquivo(caminho) {
    const dados = await toRead(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach((valor, indice) => {
        console.log(valor, indice);
    });
}
leArquivo(caminhoArquivo);
class Pessoa {
    constructor(nome){
        this.nome = nome;
    }

}

const nome = 'Luiz';
const sobrenome = 'Miranda';


// exports.Pessoa = Pessoa;

module.exports = {
    nome, sobrenome, Pessoa
}



// const falaNome = () => {
//     return nome + ' ' + sobrenome;
// }

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// // Valor por referencia ↓

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'Vai Flamengo';

// // console.log(exports);
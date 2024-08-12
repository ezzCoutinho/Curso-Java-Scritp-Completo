const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    cidade: 'Alexânia'
};
// - > anotação de ponto
// console.log(pessoa.nome);
// - > anotação de colchetes
// console.log(pessoa['sobrenome']);
// - > anotação de colchetes dinâmica
const cidade = 'cidade';
// console.log(pessoa[cidade]);
delete pessoa.sobrenome;

// Objeto construtor
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = '25';
pessoa1.falarNome = function() {
    return (`${this.sobrenome} está falando o seu nome.`);
};
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
// delete pessoa1.nome;
// console.log(pessoa1.falarNome());
// console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1){
    // console.log(pessoa1[chave]);
}

// Factory function

function criaPessoa (nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio');
// console.log(p1.nomeCompleto());

// Constructor function

function Pessoa (nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = () => {
        return `${this.nome} ${this.sobrenome}`
    };
    // travando o objeto na raiz da construção
    Object.freeze(this);
}

// p1 = (ENDERECOMEMORIA) -> 'Valor'
// p1.ENDERECOMEMORIA = {nome: 'Matheus'}
// p1 = (NOVOENDERECO) -> Não posso fazer isso.
const p2 = new Pessoa('Luiz', 'Miranda');
// Travando o objeto 
Object.freeze(p2);
// alterando a chave do objeto e não a variavel
p2.nome = 'Matheus'; 
console.log(p2.nomeCompleto());

// new -> {} -> this -> nome
const p3 = {};
p3.nome = 'Luiz'


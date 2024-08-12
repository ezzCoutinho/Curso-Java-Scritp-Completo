class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }


}


function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype = Object.create(Pessoa.prototype);
Pessoa2.prototype.constructor = Pessoa2;

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa2('Maria', 'Miranda');


console.log(p1);

console.log(p2);

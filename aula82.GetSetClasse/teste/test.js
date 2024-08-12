// Crie uma classe Pessoa com os atributos nome e idade. Utilize um getter para retornar o nome completo da pessoa (nome + sobrenome) e um setter para validar se a idade é maior que 0.

class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    get validarIdade() {
        return this.idade;
    }

    set validarIdade(valor) {
        if(valor <= 0) {
            return console.log('Idade inválida');
        }

        return this.idade = valor;
    }

}

const p1 = new Pessoa('Luiz', 'Otávio Miranda', 38);

p1.validarIdade = 0

console.log(p1.validarIdade);


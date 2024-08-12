// Crie uma classe Pessoa com os atributos nome e idade. Adicione um método saudacao() que retorna uma saudação com o nome e a idade da pessoa.

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    // prototype
    saudacao() {
        console.log(`Olá, me chamo ${this.nome}, e tenho ${this.idade} anos de idade.`);
    }
}


const p1 = new Pessoa('Luiz', 38);

console.log(p1);

// Crie uma classe Animal com os atributos nome e tipo. Adicione um método som() que retorna o som característico do animal.

class Animal {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    som() {
        if (this.tipo === 'cachorro') return `Au au!`;

        if (this.tipo === 'gato') return `Miau!`;


        else return `não incrementei mais sons ^^'`;
    }
}

const a1 = new Animal('Fluk', 'Cachorro');

console.log(a1);

//Crie uma classe Retangulo com os atributos largura e altura. Adicione um método area() que calcula e retorna a área do retângulo.

class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    area() {
        return this.altura * this.largura;
    }
}

// largura e altura em metros, atenção.
const r1 = new Retangulo(44, 38);

console.log(r1);

//Crie uma classe ContaBancaria com os atributos saldo e titular. Adicione métodos deposito(valor) e saque(valor) que modificam o saldo da conta de acordo com o valor do depósito ou saque.

class ContaBancaria {
    constructor(saldo, titular) {
        this.saldo = saldo;
        this.titular = titular;
    }


    depositar(valor) {
        this.saldo += valor; return this.verSaldo()

    }

    saque(valor) {
        if (valor > this.saldo) return `Saldo insuficiente ${this.verSaldo()}`;

        else this.saldo -= valor; return this.verSaldo();
    }

    verSaldo() {
        return `R$:${this.saldo.toFixed(2)}`;
    }

}


class CP extends ContaBancaria {
    constructor(saldo, titular) {
        super(saldo, titular);
    }
}

class CC extends ContaBancaria {
    constructor(saldo, titular, limite) {
        super(saldo, titular);
        this.limite = limite;
    }

    saque(valor) {
        if (valor > (this.saldo + this.limite)) return `Saldo insuficiente${this.verSaldo()}`;

        else this.saldo -= valor; return `${this.verSaldo()}`;
    }
}

const c1 = new ContaBancaria(12, 'Luiz');

const cp = new CP(2, 'Otávio');

const cc = new CC(40, 'Miranda', 20);

console.log(c1);

console.log(cp);

console.log(cc);

// Crie uma classe Carro com os atributos marca, modelo e ano. Adicione um método idadeAtual() que calcula e retorna a idade atual do carro com base no ano atual.

class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    idadeAtual() {
        const data = new Date();
        const anoAtual = data.getFullYear();
        return `O ${this.modelo} tem ${anoAtual - this.ano} anos de idade`;
    }
}


const ca1 = new Carro('Chevrolet', 'Santana', 2003);

console.log(ca1);
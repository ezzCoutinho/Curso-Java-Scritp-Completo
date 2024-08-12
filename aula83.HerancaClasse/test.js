// Crie uma classe Pessoa com os atributos nome e idade. Utilize um setter para verificar se a idade é um número positivo. Crie uma classe Aluno que herda de Pessoa e inclui o atributo matricula. Adicione um getter na classe Aluno para retornar a matrícula.

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }


    set verificaIdade (valor) {

        if(valor <= 0){
            console.log('Idade inválida')
            return;
        }

        else console.log(`Idade válida.`)

        this.idade = valor;
    }
}

class Aluno extends Pessoa {
    constructor(nome, idade, matricula) {
        super(nome, idade)
        this.matricula = matricula;
    }

    get retornaMatricula () {
        return this.matricula;
    }
}

const a1 = new Aluno('Marcos', 16, 'Feita em 16 de Abril de 2004');

console.log(a1.retornaMatricula);

// Crie uma classe ContaBancaria com os atributos saldo e titular. Utilize um setter para verificar se o saldo é um número positivo. Crie uma classe ContaCorrente que herda de ContaBancaria e inclui o atributo limite. Adicione um getter na classe ContaCorrente para retornar o limite.

class ContaBacaria {
    constructor(saldo, titular) {
        this.saldo = saldo;
        this.titular = titular;
    }

    set verificarSaldo(valor) {
        if(valor < 0){
            console.log('Saldo inválido');
            return;
        }

        this.saldo = valor;
    }

    get verSaldo () {
        return console.log(`R$: ${this.saldo.toFixed(2)}`);
    }

}

class CC extends ContaBacaria {
    constructor(saldo, titular, limite) {
        super(saldo, titular)
        this.limite = limite;
    } 

    get retornaLimite () {
        return console.log(`R$: ${this.limite.toFixed(2)}`);
    }

    set sacar (valor) {
        if(valor > (this.saldo + this.limite)) {
            console.log(`R$: ${valor.toFixed(2)}, é maior do que você pode sacar...`)
            return;
        }
        
        this.saldo -= valor;
    }
}

const cc = new CC (14, 'Mardonio', 6)

cc.sacar = 21;
cc.verSaldo;
cc.retornaLimite;


// Crie uma função construtora chamada Animal que recebe os parâmetros especie, nome, idade e som (representando o som que o animal faz) e cria um objeto com essas propriedades. Adicione um método chamado fazerSom() que retorna uma string com o som do animal.

function Animal (especie, nome, idade, som) {
    this.especie = especie;
    this.nome = nome;
    this.idade = idade;
    this.som = som;
    this.fazerSom =() => {
       return this.som;
    };
}

const a1 = new Animal('Panthera onca', 'Onça Pintada', 8, 'rrraaauu')
// console.log(a1);

// Crie uma função construtora chamada Carro que recebe os parâmetros marca, modelo, ano e velocidade e cria um objeto com essas propriedades. Adicione um método chamado acelerar() que aumenta a velocidade em 10 km/h.

function Carro (marca, modelo, ano, velocidade) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano; 
    this.velocidade = `${velocidade}Km/h`
    this.acelerar =() => {
        return `${velocidade += 10} Km/h`;
    };

}

const c1 = new Carro('Volkswagen', 'Santana', 2003, 70 );
// console.log(c1.modelo, c1.acelerar());

// Crie uma função construtora chamada Produto que recebe os parâmetros nome, preco e quantidade e cria um objeto com essas propriedades. Adicione métodos para aumentar e diminuir a quantidade em estoque.
function Produto (nome, preco, quantidade){
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
    this.aumenta = (x = 2) => {
        return quantidade += x;
    };
    this.diminui = (y = 1) => {
        return quantidade -= y;
    };
}

const p1 = new Produto('Passatempo', 2.39, 54);
// console.log(p1.diminui());

// Crie uma função construtora chamada Pessoa que recebe os parâmetros nome, idade e profissao e cria um objeto com essas propriedades. Adicione um método chamado apresentar() que retorna uma string com o nome, idade e profissão da pessoa

function Pessoa (nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
    this.apresentar = () => {
        return `Olá meu nome é: ${nome}, tenho: ${idade} anos de idade, minha profissão é: ${profissao}`;
    }
}

const pessoa = new Pessoa('Luiz', 38, 'professor');
console.log(pessoa.apresentar());

// Crie uma função construtora chamada ContaBancaria que recebe os parâmetros numero, titular, saldo e tipo (corrente ou poupança) e cria um objeto com essas propriedades. Adicione métodos para depositar e sacar dinheiro da conta.

function ContaBancaria (numero, titular, saldo, tipo) {
    this.numero = numero;
    this.titular = titular;
    this.saldo = saldo;
    this.tipo = tipo;
    this.depositar = (x = 1328) =>{
        return saldo += x;
    };
    this.sacar = (y = 5000) => {
        return saldo -= y;
    }
}
const conta = new ContaBancaria(45678265-2, 'Ruvelino Alves Da Silva', 18456, 'Corrente')
console.log(conta.sacar());
// Crie uma função construtora chamada Pessoa que recebe os parâmetros nome, idade e profissao e cria um objeto com essas propriedades.

function Pessoa (nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
}

const p1 = new Pessoa('Luiz', '30', 'Professor');
console.log(p1);

// Crie uma função construtora chamada Carro que recebe os parâmetros marca, modelo e ano e cria um objeto com essas propriedades.

function Carro (marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

const c1 = new Carro('Volkswagen', 'Santana', 2003);
console.log(c1);

// Crie uma função construtora chamada Livro que recebe os parâmetros titulo, autor e anoPublicacao e cria um objeto com essas propriedades.

function Livro(titulo, autor, anoPublicacao) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
}

const l1 = new Livro('it - A Coisa', 'Stephen King', 1986);
console.log(l1);

// Crie uma função construtora chamada Animal que recebe os parâmetros especie, nome e idade e cria um objeto com essas propriedades

function Animal (especie, nome, idade) {
    this.especie = especie;
    this.nome =  nome;
    this.idade = idade;
}

const a1 = new Animal('Panthera onca', 'Onça Pintada', 8);
console.log(a1);

// Crie uma função construtora chamada ContaBancaria que recebe os parâmetros numero, titular e saldo e cria um objeto com essas propriedades.

function ContaBancaria (numero, titular, saldo) {
    this.numero = numero;
    this.titular = titular;
    this.saldo = saldo;
}

const c2 = new ContaBancaria('74', 'Abreu Gonçalves Da Silva', 'R$: 124.567,38');
console.log(c2);
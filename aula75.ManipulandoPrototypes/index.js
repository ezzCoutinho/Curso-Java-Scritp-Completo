// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // Object.prototype
};

const objB = { // objetos literais
    chaveB: 'B'
    // __proto__: objA
};

const objC = new Object();
objC.chaveC = 'C';
// __proto__: objB

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
// console.dir(Object.getPrototypeOf(objC)) //

function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// aumenta a porcentagem de um produto.
Produto.prototype.desconto = function (porcentagem= 10) {
    this.preco = this.preco - (this.preco * (porcentagem / 100))
    return this.preco;
}

Produto.prototype.aumenta = function (porcentagem= 5) {
    this.preco = this.preco + (this.preco * (porcentagem / 100))
    return this.preco;
}

// Instância
const d1 = new Produto('chicara', 100)

// Literal
const d2 = {
    nome: 'Caneca',
    preco: 15

}

Object.setPrototypeOf(d2, Produto.prototype);

console.dir(d1);
console.dir(d2);


const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: false,
        value: 157
    },
    nome: {
        value: 'Caneta'
    }
});

console.dir(p3.nome);
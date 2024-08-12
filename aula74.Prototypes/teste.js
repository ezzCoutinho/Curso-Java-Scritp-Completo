// Crie uma função construtora Animal que recebe nome e idade como parâmetros e defina um método dizerNome no prototype que retorna o nome do animal.

// molde (modelo)
function Animal (nome, idade) {
    this.nome = nome;
    this.idade = idade;
}
// colocando o metodo na referencia __proto__
Animal.prototype.dizerNome = function () {
    return `o nome do animal é ${this.nome}`;
}
// instância
const a1 = new Animal('Thor', 5);
const a2 = new Animal('flex', 10);

console.dir(a1);
console.dir(a2);

// Crie uma função construtora Cachorro que herda de Animal e adiciona um método latir ao prototype que exibe "Au Au!".

function Cachorro (nome, idade){
    Animal.call(this, nome, idade);
}

// Copiando proto do animal para Cachorro
Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.latir = function () {
    return `Au Au!`
};


const l1 = new Cachorro('Fluk', 9);

console.dir(l1);


// Crie uma função construtora Gato que herda de Animal e adiciona um método miar ao prototype que exibe "Miau!".

function Gato (nome, idade) {
    Animal.call(this, nome, idade);
}

Gato.prototype = Object.create(Animal.prototype);
Gato.prototype.miar = function () {
    return `Miau!`
}

const g1 = new Gato('Panteru', 1);

console.dir(g1);

// Crie um objeto poodle usando Cachorro com nome "Rex" e idade 5, e chame os métodos dizerNome e latir.

const poodle = Object.create(Cachorro.prototype, {
    nome: {
        value: 'Rex',
        enumerable: true,
        writable: false,
        configurable: false
    },
    idade: {
        value: 5,
        enumerable: true,
        writable: false,    
        configurable: false
    },
});

console.dir(poodle);

// Crie um objeto persa usando Gato com nome "Whiskers" e idade 3, e chame os métodos dizerNome e miar.


const persa = Object.create(Gato.prototype, {
    nome: {
        value: 'Whiskers',
        enumerable: true,
        writable: false,
        configurable: false
    },
    idade: {
        value: 3, 
        enumerable: true,
        writable: false,
        configurable: false
    }
});

console.log(persa);
console.log(persa.dizerNome());
console.log(persa.miar());
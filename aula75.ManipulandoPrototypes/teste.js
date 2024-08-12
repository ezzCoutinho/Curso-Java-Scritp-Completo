/* 
Exercício 1

Crie um objeto animal com propriedades tipo e cor usando Object.create().
Adicione uma propriedade nome ao objeto animal.
*/

const animal = Object.create(this, {
    tipo: {
        value: 'mamífero',
        enumerable:true
    },
    cor: {
        value: 'preto',
        enumerable: true
    },
    nome: {
        value:'Panteru',
        enumerable:true
    }
});


// console.log(animal);

/* Exercício 2

Crie um objeto forma com propriedades largura e altura usando Object.create().
Crie um objeto retangulo que herda de forma usando Object.create() e adicione uma propriedade cor a ele. */

const forma = Object.create(this, {
    largura: {
        value: 7,
        enumerable: true
    },
    altura: {
        value:2,
        enumerable: true,
    }
});

// console.log(forma);

const retangulo = Object.create(forma, {
    cor: {
        value: 'red',
        enumerable:true
    }
});

// console.log();

/*
Exercício 3

Crie um objeto pessoa com propriedades nome e idade usando Object.create().
Crie um objeto estudante que herda de pessoa usando Object.create() e adicione uma propriedade curso a ele.
*/

const pessoa = Object.create(this, {
    nome: {
        value:'Luiz',
        enumerable:true,
    },
    idade: {
        value: 38,
        enumerable: true,   
    }
})

const professor = Object.create(pessoa, {
    cursando: {
        value: 'TI',
        enumerable: true,
    }
})
console.log(professor);
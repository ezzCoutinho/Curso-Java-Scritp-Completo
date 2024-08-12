// Crie um objeto animal com propriedades nome e tipo.

const animal = {
    nome: 'Fluk',
    tipo: 'mamífero'
};

// Crie um objeto cao com propriedades raca e idade e estabeleça animal como seu prototype usando Object.setPrototypeOf().

const cao = {
    raca: 'Vira-Lata',
    idade: '9'
}

Object.setPrototypeOf(cao, animal);

// console.log(cao.nome, cao.tipo);

// Crie um objeto gato com propriedades cor e idade e estabeleça animal como seu prototype usando Object.setPrototypeOf().

const gato = {
    cor: 'branca',
    idade: '9'
}

Object.setPrototypeOf(gato,animal);

// console.log(gato.nome, gato.tipo, gato.cor, gato.idade);
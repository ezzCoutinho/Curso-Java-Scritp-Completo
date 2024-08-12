// Crie um novo objeto Map chamado meuMapa. Adicione três pares chave-valor onde as chaves são nomes de frutas e os valores são as cores das frutas.

const meuMapa = new Map();

meuMapa.set('banana', 'amarelo');
meuMapa.set('morango', 'vermelho');
meuMapa.set('uva', 'roxo');

console.log(meuMapa.get('uva'));


// Crie um novo objeto Map chamado meuMapa. Adicione cinco pares chave-valor onde as chaves são números inteiros e os valores são seus quadrados.

const meuMapa1 = new Map();

meuMapa1.set(1, 1 ** 2);
meuMapa1.set(2, 2 ** 2);
meuMapa1.set(3, 3 ** 2);
meuMapa1.set(4, 4 ** 2);
meuMapa1.set(5, 5 ** 2);

console.log(meuMapa1.get(5));

//Crie um novo objeto Map chamado meuMapa. Adicione pares chave-valor onde as chaves são nomes de pessoas e os valores são objetos contendo as idades e as profissões das pessoas.

const meuMapa2 = new Map();

meuMapa2.set('Luiz', [38, 'Professor']);
meuMapa2.set('Maria', [37, 'Médica']);

console.log(meuMapa2.get('Maria'));

//Crie um novo objeto Map chamado meuMapa. Adicione pares chave-valor onde as chaves são números inteiros e os valores são arrays contendo os números pares menores que o número chave

const meuMapa3 = new Map();


for (let numerosInteiros = 1; numerosInteiros < 6; numerosInteiros++) {
    const numerosPares = [];

    for (let par = 1; par < numerosInteiros; par++)
        if (par % 2 === 0) {
            numerosPares.push(par);
        }
    meuMapa3.set(numerosInteiros, numerosPares)
}

console.log(meuMapa3);


// Crie um novo objeto Map chamado meuMapa. Adicione pares chave-valor onde as chaves são números inteiros e os valores são arrays contendo os divisores do número chave

const meuMapa4 = new Map();

for (let i = 1; i < 11; i++) {
    const numerosDivisiveis = [];

    for (let d = 1; d <= i; d++) {
        if (i % d === 0) {
            numerosDivisiveis.push(d);
        }
    }
    meuMapa4.set(i, numerosDivisiveis);
}

console.log(meuMapa4);
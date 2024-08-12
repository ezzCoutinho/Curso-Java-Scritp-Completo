// Filter, map, reduce
/* Filter -> Sempre retorna um Array, com a mesma quatidade de elementod do original ou menos.*/

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

for (let numero of numeros){
//    if(numero >= 10) console.log(numero);
}

function callbackFilter(valor, indice, array) {
    return valor > 10;
} // inativa

const numerosFiltrados = numeros.filter(valor => valor > 10);
// console.log(numerosFiltrados);


// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo o nome termina com a

const pessoas = [
    {nome:'Luiz', idade: 62 },
    {nome:'Maria', idade: 23 },
    {nome:'Eduardo', idade: 55 },
    {nome:'Letícia', idade: 19 },
    {nome:'Rosana', idade: 32 },
    {nome:'Wallace', idade: 47 },
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);

const pessoasCom50tao = pessoas.filter(obj => obj.idade > 50
);

const pessoasComFinalA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));


console.log(pessoasComNomeGrande);
console.log(pessoasCom50tao);
console.log(pessoasComFinalA);
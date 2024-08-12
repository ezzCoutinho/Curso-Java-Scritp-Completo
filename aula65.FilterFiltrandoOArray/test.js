/* 

1 - Dado um array de números, filtre apenas os números pares.

2 - Dado um array de palavras, filtre apenas as palavras que começam com a letra 'a'.

3 - Dado um array de objetos representando pessoas (cada objeto tem as propriedades nome e idade), filtre apenas as pessoas com idade maior que 18 anos.

4 - Dado um array de números, filtre apenas os números que são divisíveis por 3.

Esses exercícios ajudarão a praticar o uso do método filter() em situações diferentes.
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter(par => par % 2 === 0);

console.log(numerosPares);
/////////////////
const palavras = ['abacaxi', 'banana', 'maçã', 'uva', 'laranja', 'abacate'];

const comecaComA = palavras.filter(palavra => palavra.startsWith('a'));

console.log(comecaComA);
/////////////////
const pessoas = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Pedro', idade: 20 }
];

const maiorDeDezoito = pessoas.filter(obj => obj.idade > 18); 

console.log(maiorDeDezoito);
/////////////////
const numeros2 = [3, 6, 9, 11, 15, 18, 22, 27, 30, 35];

const divisiveisPorTres = numeros2.filter(numero => numero % 3 === 0);

console.log(divisiveisPorTres);
/////////////////

// Filtrar números ímpares de um array:

const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numImpar = numeros3.filter(numero => {
    if(numero % 2 ===0){
        return;
    } else{
        return numero;
    }
});

console.log(numImpar);

//Filtrar palavras com mais de 3 letras de um array de strings:

const palavras2 = ['casa', 'carro', 'sol', 'lua', 'árvore'];

const maisDeTres = palavras2.filter(palavra => palavra.length > 3);

console.log(maisDeTres);

// Filtrar números menores que 50 de um array:

const numeros4 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const menorCinquenta = numeros4.filter(numeros => numeros < 50);

console.log(menorCinquenta);

// Filtrar strings que não começam com a letra 'a' de um array de strings:

const palavras3 = ['abacate', 'banana', 'laranja', 'uva', 'maçã'];

const naoA = palavras3.filter(palavras => !palavras.startsWith('a'));

console.log(naoA);


/* Filtrar objetos com base em múltiplas condições de um array de objetos:
Neste exercício, você pode praticar como usar o método filter() para filtrar objetos com base em múltiplas condições, como cor e tamanho, por exemplo. */

const produtos = [
    { nome: 'Camiseta', cor: 'azul', tamanho: 'M', preco: 29.99 },
    { nome: 'Calça', cor: 'preto', tamanho: 'P', preco: 39.99 },
    { nome: 'Camisa', cor: 'azul', tamanho: 'G', preco: 19.99 },
    { nome: 'Blusa', cor: 'vermelho', tamanho: 'M', preco: 24.99 }
];
  
// filtre os nomes do produtos que começam com c e o contrario disso;

const semC= produtos.filter(obj => !obj.nome.toLowerCase().startsWith('c'));
const comC = produtos.filter(obj => obj.nome.toLowerCase().startsWith('c'));

console.log(semC);
console.log(comC);

// filtre o preco a cima de 30.00 ;

const acimaDeTrinta = produtos.filter(obj => obj.preco > 30.00);

console.log(acimaDeTrinta);

// filtre os tamanhos em M;

const tamanhoM = produtos.filter(obj => obj.tamanho.toLowerCase() === 'm');

console.log(tamanhoM);

// filtre a cor azul;

const corAzul = produtos.filter(obj => obj.cor.toLowerCase() === 'azul');

console.log(corAzul);
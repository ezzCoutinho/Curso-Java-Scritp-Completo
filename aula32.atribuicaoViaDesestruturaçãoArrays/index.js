let a = 'A';

let b = 'B';

let c = 'C';

const letras = [b,c,a]; // desestruturação
[a,b,c] = letras; // atribuição via desestruturação

// console.log(a,b,c);

//               0  1  2  3  4  5  6  7  8  // indices
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9] // atribuição
// indexOf(); pega o valor para achar o indice

const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros; // desestruturação

// console.log(primeiroNumero, segundoNumero, terceiroNumero );
// console.log(resto);

const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9] // atribuição
const [um, ,tres, , cinco, , sete, , nove] = numeros1; // estou pulando os indices com virgula e espaço, em ordem.
// console.log(um, tres,cinco, sete, nove);

//                     0          1          2  
//                  0  1  2    0  1  2    0  1  2
const numeros2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15]]; // atribuição
const [,[,,seis],[,oito,],,[treze,,]] = numeros2; // pulei 1 array com virugla, entrei no segundo array, e pulei os dois primeiro indices com virgulas.
// console.log(seis, oito,treze);
const [lista1, lista2, lista3] = numeros2; // desestruturação melhor de se usar 
console.log(lista3[2]);
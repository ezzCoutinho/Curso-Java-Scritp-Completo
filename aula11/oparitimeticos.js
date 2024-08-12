/**
 * Aritméticos
 * + Adição / Concatenação
 * ** Potenciação
 * -  Subtração
 * / Divisão
 * % Resto da divisão em números inteiros da esquerda pelo número da direita 
 * 
 * >>>>>>>>ORDEM DE PRECEDENCIAS<<<<<<<< 
 * 1° ()
 * 2° **
 * 3° *, / e % é operado na mesma ordem que for escrita no codig
 * 4° + e -
 * NaN - Not a Number
 * parseInt(número inteiro), parseFloat(números decimais).
 * Number converte uma string para inteiro como para flutuante
*/

let numero1 = '10';
let numero2 = '5';

numero1 = Number(numero1); // Melhor forma de se converter um prompt STRING em número.
numero2 = Number(numero2);

// console.log(numero1 + numero2);

const nUm1 = 10;
let nUm2 = Number('5.2'); // melhor forma de usar
// console.log(nUm1 + nUm2);

const nuM1 = 10; //case-Sensitive
const nuM2 = parseFloat('5.2'); // string converte a um número float 
// console.log(nuM1 + nuM2);
// console.log(typeof nuM2);

let Num1 = 10;
let Num2 = parseInt('5'); // string converte a um número inteiro
// console.log(Num1 + Num2);

let contador3 = 2;
contador3 *= 10; // Operadores de atribuição  *=, **=
contador3 *= 10;
// console.log(contador3);

let contador1 = 1; // incremento ++;
++contador1; // pré definido é melhor de se usar
contador1++; // pós defino 
// console.log(++contador1); não usar dessa forma


const emDois = 2; // incrementando de 2 em 2 
let incrementar = 0; 

incrementar += emDois;
incrementar += emDois;
incrementar += emDois;
incrementar += emDois;
incrementar += emDois;
// console.log(incrementar);

incrementar = incrementar + emDois;
// console.log(incrementar);

incrementar = incrementar + emDois;
// console.log(incrementar);

incrementar = incrementar + emDois;
// console.log(incrementar);

incrementar = incrementar + emDois;
// console.log(incrementar);

const decremento = 2; 
let contador2 = 10; // decremento 
contador2 -= 2 // melhor forma de se usar um decremento
contador2 -= 2
// console.log(contador2);

--contador2; // pré definido é melhor de se usar
contador2--; // pós defino 
// console.log(--contador2); não usar dessa forma 

const num1 = 5;
const num2 = 2; // cuidado com as precedencias
const num3 = 10;

// console.log((num1 + num2) * num3); 
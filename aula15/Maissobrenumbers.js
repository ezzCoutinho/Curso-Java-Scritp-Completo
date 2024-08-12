// IEEE 754-2008
let num1 = 0.7; // number
let num2 = 0.1; // number


num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0


console.log(num1);
console.log(Number.isInteger(num1));


///////////////////////////

num1 += num2; // num1 = num1 + num2
num1 += num2; // 0.9
num1 += num2; // 1.0 aqui deu 0.9999999999999
num1 += num2; // 1.1
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2; // melhor forma de se fazer é assim.
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2; // 2.0 

const  numero = 9;

let n = numero.toFixed(2); // convertir uma const em um let para formatar ela em 2 casas decimais 

console.log(n);

num1 = Number(num1.toFixed(2)) // formatando ele para inteiro

console.log(num1); // colocando casas decimass
console.log(Number.isInteger(num1)); // estou verificando se é inteiro 

///////////

let temp = num1 * Number('5');

console.log(Number.isNaN(temp)); // estou verificando se é um Not a Number, se for: True

console.log(Number.isInteger(num1)); // True para numero inteiro, false para numero flutuante

console.log(num1.toFixed(2)); // toFixed formata numeros quebrados em casas decimais ESPECIFICADAS.

console.log(num1.toString(2)); // checando numero binario do valor num1

console.log(num1.toString() + num2); // aqui eu transformei ele em string no log

num1 = num1.toString(); // aqui eu convertir um numero em uma string

console.log(typeof num1); // checando...

let num1 = 0.7; // number
let num2 = 0.1; // number 0.799999999999999

num1 += num2; 
num1 += num2; 
num1 += num2; 
num1 += num2; 
num1 += num2; 
num1 += num2; 
num1 += num2; 
num1 += num2; 
num1 += num2; 
num1 += num2; 
num1 += num2; 
num1 += num2; 
num1 += num2; // 2.0

num1 = Number(num1.toFixed(2)) // conversão para inteiro 
console.log(num1);
console.log(Number.isInteger(num1)); // estou verificando se é um número inteiro 
// DADOS PRIMITIVOS STRING, NUMBER, UNDEFINED, NULO, BOOLEAN
const nome = 'Luiz'; // string
const nome1 = "Luiz"; // string
const nome2 = `Luiz`; // string ${}
const numb1 = 10; // number
const numb2 = 10.52 // number
let nomeAluno; // undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória;; CAMELCASE nomes compostos
const aprovado = false; // Boolean = true or false (lógico)
// console.log(typeof aprovado, aprovado);

let a = 2;
let b = a; // uma cópia do a em b

console.log(a, b); // 2 2

a = 3; // alteração de variável.

console.log(a, b); // 3 2 
let concString = 'Um texto';//existem várias maneiras de fazer um concatenação

// console.log(concString.concat(' em um lindo dia.'));
// console.log(concString + ' em um lindo dia.');
// console.log(`${concString} em um lindo dia.`); // Template String.

///////////////////////////////////////////////

//               01234567                     -54321
let UmAString = 'O rato roeu a roupa do rei de roma.';

// Estou iterando sobre os números indexados da string. Encontrando um indice de uma string↓. Expressões regulares é usado para pesquisar e substituir carcacteres em strings. 



console.log(UmAString.split(' ')); // divisão de uma string, selecionei ' ', e depois escolhi quantos 3.

console.log(UmAString.toUpperCase()); // todos em letra maiuscula

console.log(UmAString.toLowerCase()); // todos em letra minuscula



console.log(UmAString.substring(UmAString.length - 5, UmAString.length - 1));// fiz a mesma coisa que o slice, só que em uma linha maior de código.
///////
console.log(UmAString.slice(-5, -1));// coloquei o começo primeiro e até onde iria, no caso o fim
/////// 
console.log(UmAString.slice(-5));// aqui eu li a string toda e fiz a subtração, pois defini até onde ele iria ler, no caso; -5.
///////
console.log(UmAString.slice(2, 6));// aqui eu fiz um fatiamento com começo e fim
///////
console.log(UmAString.length);// aqui esutou procurando saber o tamanho da string
///////
console.log(UmAString.replace(/r/g, '#')); // aqui eu fiz a substitução do R por #, usando expressão regular 


//////////////////////////////////////////////////////////////////////////////////////////
//               01234567
let UmaString = 'Um texto'; 

// Estou iterando sobre os números indexados da string. Encontrando um indice de uma string↓. Expressões regulares é usado para pesquisar e substituir carcacteres em strings. 

console.log(UmaString.search(/x/));// encontrei o indice númerico, assim como o indexOf
///////
console.log(UmaString.match(/[a-z]/g))// aqui ela achou todas, menos a letra maiuscula.
///////
console.log(UmaString.indexOf('o'));// uso uma string para achar o valor dos números indexados 
///////
console.log(UmaString.lastIndexOf('m', 3));// começa a buscar do ponto de partida para frente.
console.log(UmaString.charAt(4)); // obtem o caractere da string
console.log(UmaString[4]);  // obtem o caractere da string

///////////////////////////////////////////////
let umaString = "Um \"texto\""; // escapando de uma aspars duplas usando uma outra aspars dupla com barra invertida.

console.log(umaString);
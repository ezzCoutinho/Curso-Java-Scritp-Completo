/*
Primitivos (imútaveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores cópiados

Referência (mútavel) - array, object, function - Valores Linkados
*/

const letraA = { // object
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const copiaIndepedente = {...letraA} // copia spread

const letraB = letraA; // linkadas 

letraA.nome = 'Matheus'

console.log(letraA, letraB);
console.log(letraA, copiaIndepedente); // copia indepedete



let A = [1, 2, 3];
let B = [...A]; // Copia idenpedente SPREAD
let C = B // esta linkada com b pois b é um array mutavel

A.push(4);
console.log(A, B);

B.pop(); // apaguei 3 no B
console.log(A, B);

A.push('Luiz'); 
console.log(A, C); // c está linkado com b

/////
let a = [1, 2, 3];
let b = a; // estão linkados em sí 
console.log(a, b);

a.push('Add in finish');
console.log(a, b) // linkadas dando o mesmo valor

b.pop();
console.log(a, b); // apontando para o mesmo local na memoria

let a1 = 'A'; // 
let b2 = a1; // Cópia primitiva a partir dessa linha de codigo
console.log(a1, b2);

a1 = 'Outra Coisa'
console.log(a1, b2);

//          0123
let Nome = 'Luiz'; // Valor em sí
Nome[0] = 'R'; // não sera alterada, pois estou tentando mudar o indice 0 de uma string.
console.log(Nome.charAt(0), Nome);


let nome = 'Luiz';// estou redeclarando a variavel
nome = 'Otavio'; // e não a string
console.log(nome);
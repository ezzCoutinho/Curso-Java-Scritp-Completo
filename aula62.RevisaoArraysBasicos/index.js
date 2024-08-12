/* Arryas são indexados, eles tem indices.*/
// Array construtor.
const nomes2 = new Array('Eduardo', 'Maria', 'Joana');
const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[2] = 'João';
// deleteando um indice sem alterar os indices.
delete nomes[2];
// console.log(nomes);

const referenciaNome = ['Eduardo', 'Maria', 'Joana'];
// Referência.
const referenciaNovo = referenciaNome
// Primitiva.
const primitivaNome = [...referenciaNome];

// adicionando no final do Array
primitivaNome.push('Falcão');
referenciaNovo.push('Luiz');

// console.log(referenciaNome);
// console.log(primitivaNome);

// conta quantos indices tem no Array = 4
// console.log(referenciaNome.length);

// removendo o ultimo indice do array e retornando ele.
const removidoPrimitivo = primitivaNome.pop();
// console.log(primitivaNome, removidoPrimitivo);

// removendo o primeiro indice do array e retornando ele.
const removidoReferencia = referenciaNovo.shift();
// console.log(referenciaNovo, removidoReferencia);

// adicionando indices no começo do Array.
const adicionandoReferencia = referenciaNovo.unshift('Otávio');
// console.log(referenciaNovo);

// fatiamento de Array
const nomes3 = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];

const fatiaNomes3 = nomes3.slice(2, -2);

// console.log(fatiaNomes3);

// convertendo uma string em um array e separando ela;
const nomesSplit = 'Luiz Otávio Miranda';

const espacoSplit = nomesSplit.split(' ');
// por virgula e espaço
const virgulaSplit = nomesSplit.split(', ')

// console.log(espacoSplit);
// console.log(virgulaSplit);

// convertendo um Array em uma string e serparando ele;
const nomesJoin = [ 'Luiz', 'Otávio', 'Miranda' ];

const espacoJoin = nomesJoin.join(' ');
// por virgula e espaço
const virgulaJoin = nomesJoin.join(', ')

console.log(espacoJoin);
console.log(virgulaJoin);
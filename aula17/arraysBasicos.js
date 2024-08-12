//                012345678910
//  const nome = 'Luiz Otávio'; // assim como strings
// console.log(nome.charAt(1));

//                   0       1        2
const nomeAlunos = ['Luiz', 'Maria', 'João'] // arrays são idexados

console.log(nomeAlunos instanceof Array);// estou verificando se é um Array.

nomeAlunos.push('Luiz');
nomeAlunos.push('Eduardo'); // adicionando no fim 

console.log(nomeAlunos.slice(0, 3)); // fatiando com slice positivo

console.log(nomeAlunos.slice(0, -1)); // fatiando com slice negativo 

console.log(nomeAlunos[50]); // undefined

delete nomeAlunos[1]; // deletei o valor mas o indice ainda existe undefined

const removido2 = nomeAlunos.shift(); // removi o primeiro array
console.log(removido2); // e criei uma variavel salvando oq foi removido


const removido = nomeAlunos.pop(); // removi o ultimo array
console.log(removido); // e criei uma variavel salvando oq foi removido

nomeAlunos.unshift('Luiza');// adicionando no começo
nomeAlunos.unshift('Fábio'); // 0

nomeAlunos.push('Luiza'); // faz o mesmo do lenght
nomeAlunos.push('Fábio'); // adicionando no final do Arrays

nomeAlunos [nomeAlunos.length] = 'Luiz'; // estou adicionando 
nomeAlunos [nomeAlunos.length] = 'Fabio'; // sempre no final
nomeAlunos [nomeAlunos.length] = 'Luana';

nomeAlunos [0] = 'Eduardo'; // fiz a substituição
nomeAlunos [3] = 'Luiz'; // adicionei mais um na sequencia 3

 console.log(nomeAlunos[0]);
 console.log(nomeAlunos[2]); // apenas verificando um indice 
const saudacao = 'Ola, como vai você?';
const saudacaoA = saudacao.split(' ');
const join1 = saudacaoA.join(' ');
console.log(join1);
console.log(saudacaoA);

const exe2 = 'JavaScript é uma linguagem de programção';
const exe2e = exe2.split(' ');
const join2 = exe2e.join(' ');
console.log(join2);
console.log(exe2e);

const exe3 = 'banana,maçã,uva,laranja';
const exe3e = exe3.split(',');
const join3 = exe3e.join(', ');
console.log(join3);
console.log(exe3e);

const exe4 = '1-2-3-4-5';
const exe4e = exe4.split('-');
const join4 = exe4e.join(', ');
console.log(join4);
console.log(exe4e);

const exe5 = 'Nome: João, Idade: 30, Cidade: São Paulo';
const exe5e = exe5.split(',');
const join5 = exe5e.join(',');
console.log(join5);
console.log(exe5e);
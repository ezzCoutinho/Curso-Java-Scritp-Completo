//               -5       -4        -3        -2        -1
//                0        1         2         3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

// .splice(índice, delete, elem1, elem2, elem3);

// -----> Removendo mais de um
// const removidos = nomes.splice(-2, nomes.length);
// console.log(nomes, removidos);

// -----> Removendo o ultimo indice .pop
// const popSplice = nomes.splice(-1, 1);
// console.log(nomes, popSplice);

// -----> Removendo o primeiro índice .shift
// const shiftSplice = nomes.splice(0, 1);
// console.log(nomes, shiftSplice);

// -----> Adicionando um ultimo indice no array .push
// const pushSplice = nomes.splice(nomes.length, 0, 'Luiz');
// console.log(nomes);

// -----> Adicionando no primeiro índice do array .unshift
// const unshiftSplice = nomes.splice(0, 0, 'Luiz');
// console.log(nomes);

// -----> Alterando índices por outros índices;
const alterandoSplice = nomes.splice(1, 1, 'Jhon');
const alterandoSplice2 = nomes.splice(0, 1, 'Marya');
const alterandoSplice3 = nomes.splice(-3, 1, 'Edward');
const alterandoSplice4 = nomes.splice(-2, 1, 'Castiel');
const alterandoSplice5 = nomes.splice(-1, 1, 'Julian');
console.log(nomes);
const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let i = 0; i <frutas.length; i++) {
//     console.log(`indices: ${i}, ${frutas[i]}`); 
// }

for (let indice in frutas) {
    // console.log(indice, frutas[indice]);
}


const pessoa = {
    nome: 'João',
    sobrenome: 'Ninguém',
    idade: 25
}

for (let chaves in pessoa) { // iterar
    console.log(chaves, pessoa[chaves]);
}
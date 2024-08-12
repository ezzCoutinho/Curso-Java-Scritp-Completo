// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

// 1° criar uma variavel
// for (let i = 0; inicializando do 0

// 2° criar uma condição, a onde ela vai parar, quando esta condição for false, ele para o looping de repetição
// i <= 5;

// 3° incrementar ou decrementar
// i++ ou i--

// i++, de um em um
// i += 10, de dez em dez

// incrementando de 1 em 1
for (let i = 0; i <= 100; i++) {
    // console.log(`Linha ${i}`);
}
// decrementando de 10 em 10
for (let i = 500; i >= 400; i -= 10) {
    // console.log(`Linha ${i}`);
}

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0; // estou checando se é par ou impar
    if (par === true){
        const parReal = `Par`
        // console.log(i, parReal);
    } else if (par === false) {
        const imparReal = `Impar`
        // console.log(i,imparReal);
    }

}

const frutas = ['Maçã', 'Pêra', 'Uva', 'Morango', 'Banana', 'Marácuja'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice: ${i} ${frutas[i]}`);
}
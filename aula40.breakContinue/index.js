const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let valor of numeros) { // funciona em todos os FORS 
// for (let i in numeros) { // continue and break
//  let valor = numeros[i];
// for (let i = 0; i < numeros.length; i++) {
//     let valor = numeros[i];
let i = 0;
do {
    let valor = numeros[i];

    if (valor === 2) { // || valor === 5 << posso fazer assim
      i++;
        continue; // pulei o iteravel 2 do laço, vai até o final
    } else if (valor === 5) {
        i++; // variavel de controle é obrigatoria em whiles, 
        //para não ciar em looping infinito, e poder executar o 
        // continue e break,  sempre antes
        continue;
    }

console.log(valor);

if (valor === 7) {
    console.log(`O número: ${valor}, foi encontrado, saindo do laço...`);
    i++;
    break; // quebra o laço, executa mais nada
}

i++;

} while (i < numeros.length);
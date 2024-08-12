// Dado um array de números [1, 2, 3, 4, 5], como você usaria o método reduce() para calcular a soma de todos os números?
const numeros1 = [1, 2, 3, 4, 5];
const somaNumeros = numeros1.reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
}, 0);
console.log(somaNumeros);
// Dado um array de palavras ['JavaScript', 'é', 'muito', 'legal'], como você usaria o método reduce() para concatenar todas as palavras em uma única string?
const palavras = ['JavaScript', 'é', 'muito', 'legal'];
const concat = palavras.reduce((acumulador, valor) => `${acumulador} ${valor}`);
console.log(concat);

// Dado um array de números [10, 20, 30, 40, 50], como você usaria o método reduce() para encontrar o maior número?
const numeros2 = [10, 20, 30, 40, 50];
const numeroMaior = numeros2.reduce((argumento, valor) => {
    if (argumento > valor) return argumento;
    return valor;
})
console.log(numeroMaior);
// Dado um array de objetos [{ nome: 'João', idade: 30 }, { nome: 'Maria', idade: 25 }], como você usaria o método reduce() para calcular a média de idade?
const pessoas = [
    { nome: 'João', idade: 30 },
    { nome: 'Luiz', idade: 40 },
    { nome: 'Maria', idade: 25 }];
const pegandoIdade = pessoas.filter(obj => obj.idade);
const somandoIdade = pessoas.reduce((argumento, valor) => argumento + valor.idade, 0);
const idadeMedia = somandoIdade / pegandoIdade.length;
console.log(idadeMedia);
// Dado um array de números [1, 2, 3, 4, 5], como você usaria o método reduce() para multiplicar todos os números entre si?
const numeros3 = [1, 2, 3, 4, 5];
const multiplicaNumero = numeros3.reduce((argumento, valor) => argumento * valor);
console.log(multiplicaNumero);

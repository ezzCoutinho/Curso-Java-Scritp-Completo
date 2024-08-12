// Dado um array de números [1, 2, 3, 4, 5], como você multiplicaria cada número por 2 usando o método map()?
const numeros = [1, 2, 3, 4, 5];
const dobroNumeros = numeros.map(numero => numero * 2);
console.log(dobroNumeros);
// Dado um array de strings ['banana', 'maçã', 'uva'], como você transformaria cada string em suas plurais usando o método map()?
const fruta = ['banana', 'maçã', 'uva'];
const pluralFrutas = fruta.map(fruta => `${fruta}s`);
console.log(pluralFrutas);
// Dado um array de objetos [{ nome: 'João', idade: 30 }, { nome: 'Maria', idade: 25 }], como você extrairia apenas os nomes em um novo array usando o método map()?
const pessoas = [
    { nome: 'João', idade: 30 },
    { nome: 'Maria', idade: 25 }];
const apenasNome = pessoas.map(obj => obj.nome);
console.log(apenasNome);
// Dado um array de números [10, 20, 30, 40, 50], como você calcula o quadrado de cada número usando o método map()?
const numeros1 = [10, 20, 30, 40, 50];
const numeroAo2 = numeros1.map(numero => numero ** 2);
console.log(numeroAo2);
// Dado um array de strings ['1', '2', '3', '4', '5'], como você transforma cada string em um número usando o método map()?
const numeros3 = ['1', '2', '3', '4', '5'];
const convNumero = numeros3.map(numero => Number(numero));
console.log(convNumero);
// Dado um array de objetos [{ nome: 'João', idade: 30 }, { nome: 'Maria', idade: 25 }], como você calcularia a idade média das pessoas usando o método map()?
const pessoas2 = [
    { nome: 'João', idade: 30 },
    { nome: 'Maria', idade: 25 }];
const pegandoIdade = pessoas2.map(idade => idade.idade)
const somandoIdade = pegandoIdade.reduce((total, idade) => total + idade, 0)
const idadeMedia = somandoIdade / pegandoIdade.length;
console.log(pegandoIdade);
console.log(idadeMedia);
// Dado um array de strings ['JavaScript', 'é', 'divertido'], como você transformaria cada string em sua versão em guardas usando o método map()?
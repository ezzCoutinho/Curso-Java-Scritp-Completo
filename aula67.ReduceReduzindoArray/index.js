//
// Some todos os números (reduce)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const somaNumeros = numeros.reduce((acumulador, valor, indice) =>{ 
    acumulador += valor;
    return acumulador;
}, 0)
console.log(somaNumeros);
// Retorne um array com pares (filter)
const numerosPares = numeros.filter(numero => numero % 2 !== 0);
console.log(numerosPares);
// Retorne um array com o dobro dos valores (map)
const numeroEmDobro = numeros.map(numero => numero * 2);
console.log(numeroEmDobro);

// Retorne a idade da pessoa mais velha 
const pessoas = [
    {nome:'Luiz', idade: 62 },
    {nome:'Maria', idade: 23 },
    {nome:'Eduardo', idade: 55 },
    {nome:'Letícia', idade: 19 },
    {nome:'Rosana', idade: 64 },
    {nome:'Wallace', idade: 47 },
];
const maisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// Retorne a soma do dobro de todos numero pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const numerosPares = numeros
.filter(numero => numero % 2 === 0)
.map(numero => numero * 2 )
.reduce((argumento, valor) => argumento += valor, 0)

console.log(numerosPares);
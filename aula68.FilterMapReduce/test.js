const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// -> Filtrar pares
const apenasPares = numeros.filter(numero => numero % 2 ===0);
console.log(apenasPares);
// Retorne a soma do dobro de todos numero pares
const somaDobro = apenasPares.reduce((argumento, valor) => argumento += valor *2 , 0);
console.log(somaDobro);
// -> Dobrar os valores
const dobrarNumeros = numeros.map(numero => numero *2);
console.log(dobrarNumeros);
// -> Reduzir (somar tudo)
const somaTudo = numeros.reduce((argumento, valor) => argumento += valor, 0);
console.log(somaTudo);
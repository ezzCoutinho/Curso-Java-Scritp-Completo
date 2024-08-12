function fizzBuzz(numero) {
    if (typeof numero !== 'number') {
        return numero;
    }
    if (numero % 3 === 0 && numero % 5 === 0) {
        return `FizzBuzz`;
    } else if (numero % 3 === 0){
        return `Fizz`;
    } else if (numero % 5 ===0) {
        return `Buzz`;
    } else {
        return numero;
    }
}

console.log(('oi'), fizzBuzz('oi'));

for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}
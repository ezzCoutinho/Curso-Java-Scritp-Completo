// escreva uma função que recebe 2 números e retorne o maior deles

function maiorNumeroIf(num1, num2) {
    if (num1 > num2) {
        return `O número 1 é maior; ${num1}`;
    } else if (num1 < num2) {
        return `O número 2 é maior; ${num2}`;
    }
}

const resultadoIf = maiorNumeroIf(544, 89);

// console.log(resultado);

function maiorNumeroFor(num1, num2) {
    for (let i = num1; i > num2; i++) {
        return `O número 1, é maior; ${num1}`;
    };
    for (let i = num2; i > num1; i++) {
        return `O número 2, é maior; ${num2}`;
    }
}

const resultadoFor = maiorNumeroFor(876, 5675);

// console.log(resultadoFor);

function maiorNumeroWhile(num1, num2) {
    while (num1 > num2) {
        return `O número 1, é maior; ${num1}`;
    }
    while (num2 > num1) {
        return `O número 2, é maior; ${num2}`;
    }
}

const resultadoWhile = maiorNumeroWhile(4567, 9899);

// console.log(resultadoWhile);


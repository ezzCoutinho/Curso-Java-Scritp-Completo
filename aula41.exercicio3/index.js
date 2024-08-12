/*
Escreva uma função que recebe um número
e retorne o seguinte:
Número é divisivel por 3 = Fizz
Número é divisivel por 5 = Buzz
Número é divisivel por 3 e 5 = FizzBuzz
Número NÃO é divisível por 3 e 5 = Retorna o proprio número
Checar se o número é realmente um numero = retorne o que recebeu
Use a função com números de 0 a 100
 */

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100 + 1);
}

const gerarNumero = gerarNumeroAleatorio(0, 100);

const f = (x) => {


    if (typeof gerarNumero !== 'number') {
        return `${gerarNumero} Número invalido`
    }


    if (gerarNumero % 3 === 0 && gerarNumero % 5 === 0) {
        return `FizzBuzz`;
    } else if (gerarNumero % 3 === 0) {
        return `Fizz`;
    } else if (gerarNumero % 5 === 0) {
        return `Buzz`;
    } else {
        return gerarNumero;
    }


}

const executa = f(gerarNumero);

console.log(gerarNumero);

console.log(executa);



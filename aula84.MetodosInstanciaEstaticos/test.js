// Crie uma classe Matematica com um método estático somar que recebe dois números e retorna a soma deles.
class Matematica {
    constructor() {

    }
    static somar(x, y) {
        return console.log(`${x + y}`);
    }
}

Matematica.somar(934289, 3429);

// Crie uma classe Utils com um método estático gerarId que retorna um ID único baseado na data atual.
class Utils {
    constructor() {

    }

    static gerarId() {
        const id = new Date()
        const fatiaId = id.getMilliseconds();
        return console.log(fatiaId);

    }
}

Utils.gerarId();

// Crie uma classe Conversor com métodos estáticos paraCelsius e paraFahrenheit que convertem temperatura de uma unidade para outra.

class Conversor {
    constructor() {

    }

    static paraCelsius(valor) {
        return console.log(5 / 9 * (valor - 32));
    }

    static paraFahrenheit(valor) {
        return console.log(9 / 5 * valor + 32);
    }
}

Conversor.paraCelsius(78.8);
Conversor.paraFahrenheit(26);



// Crie uma classe chamada Calculadora com um método estático chamado soma que recebe dois números como parâmetros e retorna a soma deles. Em seguida, crie uma instância da classe Calculadora e use o método estático soma para somar dois números.

class Calculadora {
    constructor() {

    }

    static somar (num1, num2) {
        return console.log(`${num1 + num2}`);
    }
}

const calculadora = new Calculadora();

Calculadora.somar(44, 56);
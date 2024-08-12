// arguments sustenta todos os argumentos enviados.
function funcao() {
    console.log(arguments[8]);
}
// oq estiver no parâmetro da execucao da function
// será enviada para arguments
funcao('valor', 1, 2, 3, 4, 5, 6, 7, '>por indice<');

// funcao que soma todos os argumentos em arguments
function funcao1() {
    let total = 0;
    for (let argumentos of arguments) {
        total += argumentos;
    }
    console.log(`↓somando tudo com for:`);
    console.log(total);
}
// arguments na execução da funcao em -> ()
funcao1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13)

// quando não houver argumentos suficiente para os parametros
// será retornado undefined.
function funcao3(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao3(1, 2, 3)

// para assumrir um valor de um parametro por padrão, 
// usasse undefined
function funcao4(a, b = 2, c = 4) {
    console.log('↓ parametro por padrão.');
    console.log(a + b + c);

}
funcao4(2, undefined, 20);

// desestruturação no parametro
// atribuição no objeto
function funcao5({ nome, sobrenome, idade }) {
    console.log('↓ Desestruturação via Atribuição em Objetos.');
    console.log(nome, sobrenome, idade);
}

let obj = { nome: 'Luiz', sobrenome: 'Otávio', idade: 20 }

funcao5(obj);

// desestruturação no parametro
// atribuicao na execucao da funcao c/ARRAYS
function funcao6([valor1, valor2, valor3,]) {
    console.log('↓ Desestruturação via Atribuição em Arrays.');
    console.log(valor1, valor2, valor3);
}

funcao6(['Luiz Otávio', 'Miranda', 30]);

// operador de resto, cria uma array, depois do acumulador.
// iterando com for para cada operador diferente.
function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;

    }
    console.log(acumulador);
}
conta('-', 0, 20, 30, 40, 50);

// tornando arguments com rest operator
// só assim pode ser usado em uma arrow function.
const conta1 = (...args) => {
    console.log(args);
};
conta1('-', 0, 20, 30, 40, 50);

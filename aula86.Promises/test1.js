// // Exercício de Resolução de Promises:
// // Crie uma função que retorna uma Promise que é resolvida após um certo tempo (por exemplo, 2 segundos) e retorna uma mensagem de sucesso.


// const promessa1 = new Promise((resolvida, rejeitada) => {
//     setTimeout(() => {
//         const numero = 10;
//         if (numero > 5) {
//             resolvida(numero);
//         } else {
//             rejeitada('Error');
//         }
//     }, 2000)
// })


// promessa1.then((resolvida) => {
//     console.log('Resultado:', resolvida);
// }).catch((erro) => {
//     console.error('Error:', erro);
// })

// // Crie uma função que retorna uma Promise que é rejeitada após um certo tempo (por exemplo, 3 segundos) e retorna uma mensagem de erro.

// const promessa2 = new Promise((resolvida, rejeitada) => {
//     setTimeout(() => {
//         const numero = 0;
//         if (numero > 10) {
//             resolvida(numero);
//         } else {
//             rejeitada('Error');
//         }
//     }, 3000)
// })

// promessa2.then((resolvida) => {
//     console.log('Resultado:', resolvida);
// }).catch(rejeitada => {
//     console.error('Error:', rejeitada);
// })

// // Crie duas funções que retornam Promises. A primeira função deve retornar um número aleatório após um curto período de tempo. A segunda função deve receber esse número como parâmetro, dobrá-lo e retornar o resultado após um curto período de tempo. Encadeie essas duas funções para obter o número aleatório, dobrá-lo e, em seguida, exibir o resultado.
// function primeiraFuncao (){
//     return new Promise((resultado, rejeitada) => {
//         setTimeout(() => {
//             const numero = Math.floor(Math.random() * 10) +1;
//             resultado(numero);
//         }, 4000)
//     });
// }


// function segundaFuncao (numero) {
//     return new Promise((resultado) => {
//         setTimeout(() => {
//             const resolve = numero *2;
//             resultado(resolve);
//         }, 4000)
//     });
// }

// primeiraFuncao().then (numero => {
//     return segundaFuncao(numero)
// }).then(resultado => {
//     console.log(`O numero foi gerado e multiplicado por dois: ${resultado}`);
// })

//Crie três funções que retornam Promises que são resolvidas após diferentes períodos de tempo. Use Promise.all para aguardar a resolução de todas as Promises e, em seguida, exibir uma mensagem com os resultados.

// function primeiraFuncao() {
//     return new Promise(resultado => {
//         setTimeout(() => {
//             const nome = 'Flamengo não é time';
//             resultado(nome);
//         }, 1000)

//     })
// }

// function segundaFuncao() {
//     return new Promise(resultado => {
//         setTimeout(() => {
//             const nome = 'não';
//             resultado(nome);
//         }, 2000)

//     })
// }

// function terceiraFuncao() {
//     return new Promise(resultado => {
//         setTimeout(() => {
//             const nome = 'Flamengo é seleção!';
//         resultado(nome);
//         }, 3000)
        
//     })
// }

// Promise.all([primeiraFuncao(), segundaFuncao(), terceiraFuncao()]).then(resultado => {
//     console.log('Resultado:', resultado);
// })



//Crie três funções que retornam Promises que são resolvidas após diferentes períodos de tempo. Use Promise.race para aguardar a primeira Promise a ser resolvida e, em seguida, exibir uma mensagem com o resultado.

const numero = Math.floor(Math.random() * 4000) +1;

function prom1 () {
    return new Promise (resultado => {
        setTimeout (() => {
            const nome = 'Hello World';
            resultado(nome);
        }, Math.floor(Math.random() * 4000) +1);
    })
}


function prom2 () {
    return new Promise (resultado => {
        setTimeout(() => {
            const nome = '1 + 1 = 11';
            resultado(nome);
        }, Math.floor(Math.random() * 4000) +1);
    })
}

function prom3 () {
    return new Promise (resultado => {
        setTimeout(() => {
            const nome = 'Hello world 11';
            resultado(nome);
        }, Math.floor(Math.random() * 4000) +1);
    })
}


Promise.race([prom1(), prom2(), prom3()]).then(resultado => {
    console.log('first:', resultado);
})
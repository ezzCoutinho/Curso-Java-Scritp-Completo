function rand(min, max) {
    min *= 1000;
    max *= 1000;
    const numeros = Math.floor(Math.random() * (max - min) + min);
    return numeros;
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        const numero = 10;
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('BAD VALUE.');
                return;
            }
            resolve(`${msg.toUpperCase()} - Passei na promise`);
            return;
        }, tempo)
    });
}

// Promise.all Promise.race 
// Promise.all retorna apenas resultados, das promessas inclusas.

/*
Promise.all([esperaAi(3, 9000),esperaAi('Oi', 500), esperaAi('Hello World', 1000), esperaAi('KKKKKKKKKKKK', 2000)]).then(resolvido => {
    console.log('Resultado:', resolvido);
}).catch(reject => {
    console.error('Error:', reject)
})
*/

const promises = [
    // 'First',
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    // 'done.'
];

// Promise.all(promises).then(resultado => {
//     console.log('Resultado:', resultado);
// }).catch(error => {
//     console.log(error)
// })


// Promise.race retorna a primeira promessa que for concluida.

/*
Promise.race(promises).then(resultado => {
    console.log('Resultado:', resultado);
}).catch(rejeitado => {
    console.error('Error:', rejeitado);
})
*/

// Promise.resolve Promise.reject


// Promise.resolve condição adversas que sempre retornam uma 
// resolve
function baixaPagina() {
    const emCache = true;
    // se for true
    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
.then(r => console.log(r))
.catch(e => console.error(e))

// Promise.reject


function baixarReject () {
    const emCache = false;

    if(emCache) {
        return Promise.reject('Página em cache');
    } else {
        return esperaAi('Baixei a página', 5000);
    }
}

baixarReject().then(resolve => {
    console.log(resolve);
}).catch(e => {
    console.error('Error:',e);
})
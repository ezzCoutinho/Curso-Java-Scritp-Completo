// function de call back ↓
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
                reject('BAD VALUE.')
            }

            if (numero === 10) {
                resolve(msg);
            }
            else {
                reject(`${numero === 10}`);
            }
        }, tempo)
    });
}
// execução de funções em ordem(encadeado) === função de callback

esperaAi('Acessando Banco de Dados...', rand(0, 1)).then(resolve => {
    // Em arvore ↓
    console.log(resolve);
    return esperaAi('Buscando dado da BASE...', rand(2, 3)).then(resolve => {
        console.log(resolve);
        return esperaAi('EXECUTANDO dado da BASE...', rand(4, 5)).then(resolve => {
            console.log(resolve);
        })
    })
}).catch(reject => {
    console.error('ERROR:', reject)
});



esperaAi('Banco de Dados acecessado com sucesso!', rand(1, 2))
    // Sem arvore ↓ (alinhado)
    .then(resposta => {
        console.log(resposta);
        return esperaAi('dado encontrado na BASE!', rand(3, 4));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(0, rand(5, 6));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('done.');
    })
    .catch(reject => {
        console.error('eRROR:', reject);
    })


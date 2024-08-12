/*
pending -> pedente
fullfilled -> resolvida
rejected -> rejeitada
*/

function rand(min = 0, max = 3) {
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


async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', rand());
        console.log(fase1);
        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);
        const fase3 = await esperaAi('Fase 3 ', rand());
        console.log(fase3);
        console.log('Done in:', fase3);
    } catch (e) {
        console.log(e);
    }
}



executaAsync();

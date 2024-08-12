// Crie um novo objeto Map chamado meuMapa. Adicione pares chave-valor onde as chaves são números inteiros e os valores são arrays contendo os números primos menores que o número chave.

const meuMapa = new Map();

function primo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

for (let i = 1; i <= 10; i++) {
    const numerosPrimos = [];

    for (let j = 2; j < i; j++) {
        if(primo(j)) {
            numerosPrimos.push(j)
        }
    }
    meuMapa.set(i, numerosPrimos);
}

// console.log(meuMapa);
// Crie um novo objeto Map chamado meuMapa. Adicione pares chave-valor onde as chaves são números inteiros e os valores são arrays contendo os números ímpares menores que o número chave.

const meuMapa1 = new Map();

for (let i = 1; i <= 20; i++) {
    const numerosPrimos = [];

    for (let p = 1; p < i; p++) {
        if (p % 2 !== 0) {
            numerosPrimos.push(p);
        }
    }

    meuMapa1.set(i, numerosPrimos);
}

// Crie um novo objeto Map chamado meuMapa. Adicione pares chave-valor onde as chaves são números inteiros e os valores são arrays contendo os números quadrados menores que o número chave. 

const meuMapa2 = new Map();


for (let i = 1; i <= 10; i++) {
    const numerosQuadrados = []; 

    for (let q = 1; q <= i; q++) {
        numerosQuadrados.push(q * q);
    }
    meuMapa2.set(i, numerosQuadrados)
}



// Crie um novo objeto Map chamado meuMapa. Adicione pares chave-valor onde as chaves são números inteiros e os valores são arrays contendo os números cubos menores que o número chave. 

const meuMapa3 = new Map ();

for (let i = 1; i <= 5; i++) {
    const numerosCubos = []; 

    for (let c= 1; c < i; c++) {
        numerosCubos.push( c * c * c)
    }
    meuMapa3.set(i, numerosCubos);
}

console.log(meuMapa3);
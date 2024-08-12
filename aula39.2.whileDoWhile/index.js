let i = 0; // iniciando

while (i <= 10) { // condição com fim
    // console.log(i); // log 
    i++; // incrementar
}


function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

// let rand = random(1, 50) // de 1 a 50 numeros aleatorios

let rand = 10;

while (rand !== 10) { // enquando rand for diferente de 10 execute o laço, só pare quando achar ele 
    rand = random(1, 50);
    console.log(rand);
}

console.log('#############################');

do {
    rand = random(1, 50); // atualizei o valor 
    console.log(rand);
} while (rand !== 10); // só executei a condição depois por isso atualizou o valo 
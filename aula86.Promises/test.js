const promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = Math.random();
        if (numero < 0.5) {
            resolve(numero);
        } else {
            reject('Error');
        }
    }, 1000)
});

promessa.then((resultado) => {
    console.log('Resultado:', resultado);
}).catch ((erro) => {
    console.error('Error:', erro);
})
function mostraHora() {
    let data = new Date('00:00:00'); // data funcao construtora

    return data.toLocaleTimeString('pt-BR', { // pegando a hora em string
        timeStyle: 'medium',
        hour12: false,
    });

}

function funcaoDoInteval() { // obrigatório ter essa function
    // console.log(mostraHora());
}

setInterval(funcaoDoInteval, 1000) // apenas usando a referencia
// passando a condição em milesimos de segundos

const timer = setInterval(function () { // função anonima
    console.log(mostraHora());
}, 1000);

setTimeout(function () {
    clearInterval(timer); // parar o time
}, 3000); // em 10 segundos

setTimeout(function () {
    console.log('Vai flamengo.');
}, 5000);
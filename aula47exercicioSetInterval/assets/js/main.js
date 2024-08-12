function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000); // MARCO ZERO
    return data.toLocaleTimeString('pt-BR', { // criando os segundos e formatando para '00:00:00'
        timeStyle: 'medium',
        timeZone: 'GMT'
    })
}

const relogio = document.querySelector('.relogio');

let segundos = 0;
let timer;


function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++; // adicionando segundos por segundos
        relogio.innerHTML = criaHoraDosSegundos(segundos) // adicionando segundo a pagina
    }, 1000);
}

document.addEventListener('click', function (e) {
    const elemento = e.target;

    if (elemento.classList.contains('iniciar')) {
        relogio.classList.remove('pausado'); // removendo a cor 
        relogio.classList.add('inicializado');
        clearInterval(timer)
        iniciaRelogio();
    }

    if (elemento.classList.contains('pausar')) {
        relogio.classList.remove('inicializado');
        relogio.classList.add('pausado');
            clearInterval(timer);
     }

    if (elemento.classList.contains('zerar')){
        relogio.classList.remove('pausado');
        relogio.classList.remove('inicializado');
        clearInterval(timer);
        segundos = 0;
        relogio.innerHTML = '00:00:00';
    }
});


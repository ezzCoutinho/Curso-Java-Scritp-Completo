/* 
functions tem escopos especiais, onde uma variavel dentro de uma 
function é inacessivel para outra function, mas é acessivel no escopo global.
*/
const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Otávio';
    falaNome();
}

usaFalaNome();
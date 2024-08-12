// return
// retorna um valor e termina a função
function soma(a, b) {
    return a + b;
}

// não tem retorno.
function soma2(a,b) {
    console.log(a + b);
}

//existe funcoes que não precisam de retorno
// document.addEventListener('keypress', function(e) {
//     console.log(e);
//     if(e.keyCode === 101){
//         document.body.style.backgroundColor = 'red';
//     }
    
    
//     if (e.keyCode === 98){
//         document.body.style.backgroundColor = 'black';
//     }

// })


// retornando um função fabricadora de objetos.
function criaPessoa(nome, sobrenome){
    return {nome, sobrenome};
}

const p1 = criaPessoa('Matheus', 'Coutinho');

const p2 = {
    nome:'João',
    sobrenome: 'Alvez'
};

console.log(p1);
console.log(p2);

// uma function que tem uma function dentro dela
// que retorna a interna e a externa
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo');
console.log(resto);

// outro exemplo de function dentro de function
function criaMultiplicador (multiplicador) {
    function numero(n) {
         return n * multiplicador;
    }
    return numero;
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

const numero = quadriplica(2);

console.log(numero);

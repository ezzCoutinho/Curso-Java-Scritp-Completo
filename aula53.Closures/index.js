// escopo 3, global.
function retornaFuncao(nome) { // escopo 2
    // const nome = 'luiz';
    function sobrenome(sobrenome) {
        return nome + ' ' + sobrenome; // escopo 1 
    };
    return sobrenome;
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');

const sobrenome1 = funcao('Otávio');
const sobrenome2 = funcao2('Silva');



console.log(sobrenome1);
console.log(sobrenome2);

console.dir(funcao);
console.dir(funcao);
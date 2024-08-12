const verdadeira = true; // posso acessar essa variavel dentro da fuction 

// Let tem escopo de bloco {... bloco }, posso redeclarar em blc
// Var só tem escopo de função 


let nome = 'Luiz'; // let não pode se redeclarada
var nome2= 'Luiz'; // var pode ser redeclarada

if (verdadeira) {
    let nome = 'Otávio'; // Criando uma nova variável
    var nome2 = 'Rogério'; // redeclarando
    // console.log(nome,nome2); // caso não tenha aqui, ele procura no escopo global, fora da ninhada
    
    if (verdadeira) { // bloco aninhado.
        let nome = 'Outra coisa'; // Criando uma nova variável
        // console.log(nome,nome2); 
        var nome2 = 'Outra coisa'; // redeclarando
    }

        if (verdadeira) {
            let nome = 'Matheus'; // primeiro a engine executa o ultimo bloco aninhado, se ela não achar aqui, ela procura em outros acima e executa os restantes do log
            var nome2 = 'Pimentel'; // ela vai ser usada fora do bloco da ninhada.
            // console.log(nome,nome2);
        }
}

const teste = 'Habbib'; // posso acessar ela dentro da fuction, 


function falaOi () { // fuction é EGOISTA, igual a nos kkk,.
    // não posso acessar uma variavel aqui de dentro
    var sobrenome = 'Miranda'; // criei ela

    if (verdadeira) {
        var sobrenome = 'Souza'; // estou redeclarando 
        // console.log(sobrenome);
    }
        if(verdadeira) {
            let nome = 'Andersson Lucas'; // criando
            var sobrenome = 'Da Silva'; // redeclarando
            // console.log(nome,sobrenome);

        }


}

falaOi();

console.log(sobrenome); // hostinger


var sobrenome = 'Miranda'; // undefined 


console.log(sobrenome1); // hostinger

let sobrenome1 = 'Miranda'; // before initialization
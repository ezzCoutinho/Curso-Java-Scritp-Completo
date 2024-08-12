// Declaração de função (Function hoisting)
// falaOi(); // Fuction hoisting 
function falaOi(){
    console.log('Oie??? oie??? ta me achando com cara de mulher? vai mandar oie para o capeta');
};

// Function = First-class objects (Objetos de primeria class)

// Function expression
const souUmDado = function() {
    console.log('Sou um dado.');
};

function executaFuncao(funcao) {
    funcao();
};

executaFuncao(falaOi);
executaFuncao(souUmDado);

//  Arrow function 
const fucaoArrow = () => {
    console.log('Sou uma arrow function.');
};

fucaoArrow();

// Dentro de um objeto
const objeto = {
    falar() {
        console.log('Meu nome é Luiz Alberto.');
    }
};
// objeto.get
objeto.falar();
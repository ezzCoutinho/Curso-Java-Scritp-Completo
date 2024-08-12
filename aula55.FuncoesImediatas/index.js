// IIFE -> immediately invoked function expression
//  invoked function, vria um escopo local, se protege do escopo
//  global
(function (idade, peso, altura) {
    const sobrenome= 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }
    function falaNome(){
        console.log(criaNome('Luiz'));
    }
    falaNome();
    console.log(`Idade: ${idade}, peso: ${peso}Kg's e altura: ${altura}`);

}) (24, 91, 1.70);
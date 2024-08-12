/*
Escreva uma função chamada ePaisagem que recebe dois argumentos;
largura e altura, de uma imagem (number).
retorne true se a imagem estiver no modo paisagem */

function ePaisagem (largura, altura) {
    return largura > altura ? true : false;
}

const paisagem = ePaisagem(67,123)

// console.log(paisagem);

const arrowPaisagem = (l,a) => l > a ? true : false;

console.log(arrowPaisagem(67,98));

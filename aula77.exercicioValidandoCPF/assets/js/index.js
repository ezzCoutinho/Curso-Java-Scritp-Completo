// 705.484.450-52 070.987.720-03
/* 

7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237 somatoria

11 - (237 % 11) = 5 (primeiro digito)
if resultado > 9, considerado 0 

---------------------------------------------------------------


o último digito vem da primeira cnt
7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0 45 32 56  24 20 20 0  10 = 284 somatoria 

11 - (284 % 11) = 2 (primeiro digito)
if resultado > 9, considerado 0 

if (705.484.450-52 === 705.484.450-52) return 705.484.450-52
return `cpf inválido.`
*/

const cpf = '070.987.720-03';
let cpfFatiado = cpf.slice(0, 11);
let cpflimpo = cpfFatiado.replace(/\D+/g, '');
const cpfArray = Array.from(cpflimpo);
const numeros = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]


const multiplicaCpf = cpfArray.map((valor, indice) => {
    return Number(valor) * numeros[indice]
});

const somatoria1 = multiplicaCpf.reduce((argumento, valor) => {
    argumento += valor;
    return argumento;
}, 0);

let cpfFatiado2 = cpf.slice(0, 13);
let cpflimpo2 = cpfFatiado2.replace(/\D+/g, '');
let cpfArray2 = Array.from(cpflimpo2);
const numeros2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];


const multiplicaCpf2 = cpfArray2.map((valor, indice) => {
    return Number(valor) * numeros2[indice];
});

const somatoria2 = multiplicaCpf2.reduce((argumento, valor) => {
    argumento += valor;

    return argumento;
}, 0);



function digitoMaior1(conta) {

    if (conta > 9) return 0;
    return conta;

}


const verificando1 = digitoMaior1(11 - (somatoria1 % 11));
const verificando2 = digitoMaior1(11 - (somatoria2 % 11));


function validadorFinal() {

    if (`${cpfFatiado}-${verificando1}${verificando2}` === cpf) return `${cpf} válido.`;
    return `${cpf} inválido`;
}

function iniciaValidador() {
    console.log(validadorFinal());
}

const inicia = iniciaValidador();


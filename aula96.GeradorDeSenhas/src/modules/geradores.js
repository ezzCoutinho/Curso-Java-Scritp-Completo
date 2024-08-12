import { senhaGerada } from "./formGeraSenha";
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraMaiusculas = () => String.fromCharCode(rand(65, 91));
const geraMinusculas = () => String.fromCharCode(rand(97, 123));
const geraNumeros = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;~^[]!@#$%*()_+=-';
const geraSimbolos = () => simbolos[rand(0, simbolos.length)];


export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {

    if(qtd.length <= 0) return senhaGerada.innerHTML = 'eRROR: 0 caracteres';

    const senhaArray = [];
    qtd = Number(qtd);

    for (let i = 0; i < qtd; i++) {
        // se for verdadeiro executa
        maiusculas && senhaArray.push(geraMaiusculas());
        minusculas && senhaArray.push(geraMinusculas());
        numeros && senhaArray.push(geraNumeros());
        simbolos && senhaArray.push(geraSimbolos());
    }

    return senhaArray.join('').slice(0, qtd);
}

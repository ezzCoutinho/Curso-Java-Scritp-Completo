// export {nome as nome2, sobrenome, idade, soma};

export const nome = 'Luiz';
export const sobrenome = 'Miranda';
export const idade = 30;
const locoAbreu = 'VACA DOIDA SEM CABEÇAAAAAA';

export function soma (x, y) {
    return x + y;
}

(a) => Math.sqrt(a);

export default class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome; 
        this.idade = idade;
    }

    saudacao () {
        return console.log(`${nome} está dizendo oi.`)
    }
}


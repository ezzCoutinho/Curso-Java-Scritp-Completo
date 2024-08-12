// PROPRIEDADE PRIVADA E UNICA.s
const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade() {
        return this[_velocidade]
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') throw new TypeError (`Olha, estava esperando um ${typeof 0}, não uma ${typeof valor}`);

        if(valor >= 110 || valor <= 0) throw new TypeError (`Não era esse valor: ${valor}, que eu estava esperando.`)

        return this[_velocidade] = valor;
    }


    acelerar () {
        if(this[_velocidade] >= 110) return;
        this[_velocidade]++;
    }

    freiar () {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for (let i = 0; i <= 200; i++) {
    c1.acelerar();
}
// SETTER
c1.velocidade = 109;
// GETTER 
console.log(c1.velocidade);


class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

   get nomeCompleto () {
    return `${this.nome} ${this.sobrenome}`;
    }

    set nomeCompleto (valor) {
        // colocando o valor em array e usando o sep espc
        valor = valor.split(' ');
        // apagando o primeiro indice. (separando a uniao que foi feita no getter)
        this.nome = valor.shift();
        // colocando o valor em string e usando o sep espc
        this.sobrenome = valor.join(' ')
    }
}


//instancia
const p1 = new Pessoa ('Luiz', 'Otávio Miranda');

p1.nomeCompleto = 'Luiz Otávio Miranda';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1);
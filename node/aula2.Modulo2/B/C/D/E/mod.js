module.exports = class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }

    static latir( nome) {
        return console.log(`${nome} está latindo`);
    }

    ruivar () {
        return console.log(`${this.nome} está ruivando`)
    }
}


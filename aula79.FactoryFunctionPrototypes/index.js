// prototype em Composição
const falar = {
    falar() {
        console.log(`${this.nome} está falando.`);
    }
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    }
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`);
    }
};
// composição com liberdade
const prototypeCriaPessoa = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {

    return Object.create(prototypeCriaPessoa, {
        nome: {
            value: nome,
            enumerable: true,
        },
        sobreno: {
            value: sobrenome,
            enumerable: true,
        },
    });
};

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = criaPessoa('Maria', 'Brandão');
console.dir(p1);
console.dir(p2);
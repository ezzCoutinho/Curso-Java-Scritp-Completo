// Produto - > aumento, desconto
// Camiseta = Cor, caneca = material
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
};

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};

// Linkando os parametros do Produto para Camiseta
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

// Linkando o Prototype de produtos a camisetas
Camiseta.prototype = Object.create(Produto.prototype);
// Colocando constructor na referencia do __proto__
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (porcentagem) {
    this.preco = this.preco + (this.preco * (porcentagem / 100))
    return this.preco;
};

// Linkando os parametros do Produto a Caneca
function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        get: () => {
            return estoque;
        },
        set: (valor) => {
            if (typeof valor !== 'number') throw new TypeError(`home, coloque um ${typeof 0} ai... e não uma ${typeof valor}, seu pilantra.`)
            estoque = valor;
        }
    });
}

// Linkando os prototypes de Produto a caneca
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta('Regata', 7.5, 'Preta');

const produto = new Produto('Gen', 111);

const caneca = new Caneca('Caneca do Flamengo', 35, 'Porcelana', 5);

console.dir(produto);
console.dir(camiseta);
caneca.estoque = 'oi';
console.dir(caneca);

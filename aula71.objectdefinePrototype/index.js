// defineProperty - defineProperties
function Produto (nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor da chave
            writable: false, // altera valor da chave
            configurable: false // edita a chave ou apaga
        },
        preco: {
            enumerable: true, // mostra chave
            value: preco, // valor da chave
            writable: false, // altera o valor da chave
            configurable: false // edita a chave ou apaga
        }
    });

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor da chave
        writable: false, // altera o valor da chave
        configurable: false // edita e apaga a chave
    });


}

const p1 = new Produto('Camiseta', 20, 5);
console.log(p1);
console.log(Object.keys(p1));


for (let chaves in p1) {
    console.log(chaves);
}
// defineProperty -> Getter e setters
function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: false, // edita e apaga a chave
        get: () => { // valor
            return estoque;
        },
        set: (valor) => { // writable
            if(typeof valor !== 'number'){
                throw new TypeError ('Esta chave necessita de um número.');
            }
            estoque = valor;
        }
    });

}

// getter e setter em function Factory
function criaPessoa (nome, sobrenome) {
    return {
        get nome () {  // valor
            return nome;
        },
        set nome (valor) {
            if(typeof valor !== 'string') {
                throw new TypeError('Estava esperando uma string, não um número.');
            }

            nome = valor; // writable: true,
        },
        get sobrenome () {
            return sobrenome;
        },
        set sobrenome (valor) {
            if(typeof valor !== 'string'){
                throw new TypeError('Estava esperando uma string, não um número.');
            }

            sobrenome = valor; // writable: true
        }
    };
}

const p2 = criaPessoa('Luiz', 'Otávio');
p2.nome = 'Luiz Otávio';
p2.sobrenome = 'Miranda';
console.log(p2.nome, p2.sobrenome);

// const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 4;
// console.log(p1.estoque);


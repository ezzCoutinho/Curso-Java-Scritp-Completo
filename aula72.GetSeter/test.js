// Como você definiria uma função construtora Carro que recebe os parâmetros marca, modelo e ano e cria um objeto com essas propriedades?
function Carro(marca, modelo, ano) {
    Object.defineProperties(this, {
        marca: {
            enumerable: true, // vai aparecer.
            configurable: false,
            get: () => { // value
                return marca;
            },
            set: (valor) => { // writable
                if (typeof valor !== 'string') throw new TypeError(`Estava esperando uma ${typeof ' '}, não um ${typeof valor}`);
                marca = valor;
            },
        },
        modelo: {
            enumerable: true,
            configurable: false,
            get: () => {
                return modelo;
            },
            set: (valor) => {
                if (typeof valor !== 'string') throw new TypeError(`Estava esperando uma ${typeof ' '}, não um ${typeof valor}`);
                modelo = valor;
            },
        },
        ano: {
            enumerable: true,
            configurable: true,
            get: () => {
                return ano;
            },
            set: (valor) => {
                if(typeof valor !== 'number') throw new TypeError(`Estava esperando um ${typeof 0}, não um ${typeof valor}`);
                ano = valor;
            }

        }


    });
}

const c1 = new Carro('Volkswagen', 'Santana', 2003)
delete c1.marca;
console.log(c1.marca, c1.modelo, c1.ano);

// Como você definiria uma função fabricadora Livro que recebe os parâmetros titulo, autor e anoPublicacao e retorna um objeto com essas propriedades, além de um getter decada que retorna a década de publicação do livro e um setter novoTitulo que atualiza o título do livro?

function criaLivro (titulo, autor, anoPublicacao) {
    return{
        get titulo () {
            return titulo;
        },
        set titulo (valor) { // === writable: true
            titulo = valor
        },
        get autor () {
            return autor;
        },
        set autor (valor) { // == writable: false.
            if(valor !== autor) throw new TypeError(`Estava esperando: ${autor}, não: ${valor}`);
            autor = valor;
        },
        get anoPublicacao () {
            return anoPublicacao;
        },
        set anoPublicacao (valor) {
            if(valor === anoPublicacao) {
                return valor;
            } else {
                throw new TypeError(`Estava esperando: ${anoPublicacao}, não: ${valor}`);
            }
        
        }, 
        get anos () {
            const anos = Math.floor(this.anoPublicacao / 10) * 10;
            return anos.toString().slice(-2);
            
        }
    };
}

const l1 = criaLivro('it - A Coisa', 'Stephen King', 1987);
l1.titulo = 'Linguagem Orientada'
console.log(`Livro: ${l1.titulo}, autor:${l1.autor}, lançado no anos ${l1.anos}, ano de lançamento: ${l1.anoPublicacao}`);

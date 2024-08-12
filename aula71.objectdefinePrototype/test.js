// Crie uma função construtora Pessoa que recebe os parâmetros nome, idade e profissao. Use Object.defineProperty() para criar uma propriedade anoNascimento que calcula o ano de nascimento com base na idade atual.

function Pessoa (nome, idade, profissao) {
    const anoAtual = new Date();
    

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false
        },
        idade: {
            enumerable: true,
            value: idade,
            writable: false,
            configurable: false
        },
        profissao: {
            enumerable: true,
            value: profissao,
            writable: false,
            configurable: false
        }
    });
    Object.defineProperty(this, 'anoNascimento', {
        enumerable: true,
        value: anoAtual.getFullYear() - idade,
        writable: true,
        configurable: false
    });
}

const p1 = new Pessoa('Luiz Otávio', 38, 'Professor');
console.log(p1);

// Crie uma função construtora Livro que recebe os parâmetros titulo, autor e anoPublicacao. Use Object.defineProperty() para criar uma propriedade decada que retorna a década de publicação do livro.

function Livro (titulo, autor, anoPublicacao) {
    Object.defineProperties(this, {
        titulo: {
            enumerable: true,
            value: titulo,
            writable: false,
            configurable: false
        },
        autor: {
            enumerable: true,
            value: autor,
            writable: false,
            configurable: false
        },
        anoPublicacao: {
            enumerable: true,
            value: anoPublicacao,
            writable: false,
            configurable: false
        },
        decada: {
            get: () => {
                return Math.floor(this.anoPublicacao / 10) * 10
            },
        enumerable:true,
        configurable: true
        }
    });
    
}

const l1 = new Livro('it A Coisa', 'Stephen King', 1987);
console.log(l1, l1.decada);
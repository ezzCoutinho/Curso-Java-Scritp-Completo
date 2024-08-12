// Função fabrica -> retorna objetos
// Função construtora -> constroi objetos, ja tem objetos por 
// padrão.
// Construtora -> Pessoa (new)
// função construtora iniciasse com letra maiuscula.
function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function () {

    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome + ': sou um método');
    };
} // this.nome -> Pessa.nome

// para executar uma função construtora iniciasse new
const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');
p2.metodo();

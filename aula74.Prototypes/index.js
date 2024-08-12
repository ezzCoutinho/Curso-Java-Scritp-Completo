/*
Javascript é baseado em protótipos para passar propriedades
e métodos de um objeto para outro

Protótipo é o termo usado para se referir ao que foi criado 
pela primeira vez, servindo de modelo ou molde para futuras
produções

Todos os objetos tem uma referência interna para um protótipo
(__proto__) que vem da propriedade prototype da função constru
tora que foi usada para criá-lo. Quando tentamos acessar um 
membro de um objeto, primeiro o motor do JS vai tentar encontrar
este membro no próprio objeto e depois a cadeida de 
protótipos é usada até o topo (null) até encontrar (ou não) tal 
membro.
*/


// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'Original ' + this.nome + ' ' + this.sobrenome;

}

Pessoa.prototype.estouAqui = 'HAHAHAH';
Pessoa.prototype.nomeCompleto = function ()  {
    return this.nome + ' ' + this.sobrenome;
}

// instância
const p1 = new Pessoa('Luiz', 'O.');
const p2 = new Pessoa('Maria', 'A.');
const data = new Date();

console.dir(p1);
console.dir(data);


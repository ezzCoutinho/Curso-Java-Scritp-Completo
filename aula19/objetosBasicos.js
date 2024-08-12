const PEssoa1 = { // variavel do objeto
    nome: 'Luiz', // objeto 
    sobrenome: 'Miranda',
    idade: 25,
    hobby: 'estudar linguagem de programação',

    fala() {
        console.log(`Meu nome é ${this.nome} ${this.sobrenome} tenho ${this.idade} anos de idade, e meu hobby é ${this.hobby} `);
    }, // fuction de falar 

    incrementaIdade()  {
        this.idade++;
    } // estou incrementando a idade,, fuction de incrementação 
};

PEssoa1.fala();
PEssoa1.incrementaIdade(); // incrementando 3 vezes 
PEssoa1.incrementaIdade();
PEssoa1.incrementaIdade();
PEssoa1.fala();

function criaPessoa (nome, sobrenome, idade)  { //parâmetro
    return {nome, sobrenome, idade}; // aqui está o objeto {}
}// uma fuction que retorna valor é uma factory = fabrica 

const Pessoa1 = criaPessoa('Matheus', 'Lopes', 24); // argumento
const Pessoa2 = criaPessoa('Karolayne', 'Coutinho', 26);
const Pessoa3 = criaPessoa('Ezequiel', 'Silveira', 34);
const Pessoa4 = criaPessoa('Arboleda', 'Martinez', 26);
const Pessoa5 = criaPessoa(34, 'Filipe', 'Silva'); // tem que esta com ordem junto a fuction 

console.log(typeof	Pessoa1);

console.log(Pessoa1.nome,'e', Pessoa2.nome,); // anotação de ponto


const pessoa2 = {
    nome:'Maria',
    sobrenome:'Oliveira',
    idade: 55
};
 
 const pessoa1 = { // todo objeto tem chaves > {}
    nome: 'Luiz',
    sobrenome:'Miranda',
    idade:25
 };

 console.log(pessoa1.nome, pessoa1.sobrenome); // anotação de ponto
 console.log(pessoa2.nome, pessoa2.sobrenome); // anotação de ponto
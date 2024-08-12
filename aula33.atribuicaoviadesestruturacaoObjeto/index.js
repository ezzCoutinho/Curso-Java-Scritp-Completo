const pessoa = { // objeto 
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const nome1 = pessoa.nome;
const sobrenome1 = pessoa.sobrenome;
const idade1 = pessoa.idade;
const endereco1 = pessoa.endereco; // sem atribuiução via destruturação, demorado de se fazer 
const enderecoRua = pessoa.endereco.rua;
const enderecoNumero = pessoa.endereco.numero;

console.log(idade1);

const {nome: nomePadrao ='Voce não digitou nenhum nome.', sobrenome, idade, endereco: {rua: r = 12345, numero: n = 987}, endereco} = pessoa; // atribuindo, só substituir o nome da variavel
console.log(nomePadrao, sobrenome, idade, r, n);

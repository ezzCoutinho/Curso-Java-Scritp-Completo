const pessoa = {
    inputNome: 'Matheus',
    // inputSobrenome: 'Coutinho', // na atribuicao tem que ser da mesma for que esta escrita aqui, para que não haja bugs
    inputIdade: 24,
    inputEndereco: {
        rua: 'Av.Brasil',
        numero: 987
    }
};

function adicionaVirgula (input) {
    return input === NaN ? input : `${input},`
}

const teste = adicionaVirgula('Matheus')

const { inputNome: nomePadrao = 'Você não digitou um nome, por favor, digite um nome.',
    inputSobrenome: sobrenomePadrao = ',Você não digitou um sobrenome, por favor, digite um sobre nome',
    inputIdade: idadePadrao = ',Você não digitou sua idade, por favor, digite sua idade', inputEndereco:
    {rua:ruaPadrao = ',Digite sua rua.', numero:numeroPadrao = ',Digite seu número'}, inputEndereco : enderecoPadraoFull} = pessoa;

console.log(nomePadrao)

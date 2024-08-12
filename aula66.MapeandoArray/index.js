// Dobre os números
// map recebe; valor, indices e array em seu parâmetro.

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(numero => numero * 2);

// console.log(numerosEmDobro);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
// Para cada elemento:
// Retorne apenas uma string com o nome da pessa
const apenasNome = pessoas.map(obj => obj.nome);
// console.log(apenasNome);
// Remova apenas a chave "nome" do objeto
const removeNome = pessoas.map(obj => ({ idade: obj.idade }));
console.log(removeNome);
// Adicione uma chave id em cada objeto
const addId = pessoas.map(function(obj, indice) {
    const primitivoObj = {...obj};
    primitivoObj.id = indice;
    return primitivoObj;
})
console.log(addId);
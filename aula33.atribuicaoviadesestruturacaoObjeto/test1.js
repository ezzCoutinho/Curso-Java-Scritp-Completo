const pessoa = { nome: 'João', idade: 30 };
// Como você atribuiria os valores nome e idade às variáveis nome e idade usando desestruturação?

const {nome, idade} = pessoa;

// console.log(nome,idade);
// Como você atribuiria os valores 10, 20 e 30 às variáveis a, b e c usando desestruturação?
const valores = [10, 20, 30];

const [a,b,c] = valores;

// console.log(a,b,c);
const configuracao = { largura: 100, altura: 200, cor: 'azul' };
//Como você atribuiria os valores largura e altura às variáveis largura e altura e o valor cor à variável cor usando desestruturação?

const {largura, altura, cor} = configuracao;

// console.log(largura, altura, cor);
const numeros = [1, 2, 3, 4, 5];
// Como você atribuiria os valores 1 e 2 às variáveis primeiro e segundo, e o restante dos valores a uma variável restante usando desestruturação?

const [primeiro, segundo, ...restante] = numeros;

// console.log(primeiro, segundo, restante);
const aluno = { nome: ['Maria', 'Luiz'], notas: [7, 8, 9] };
// Como você atribuiria o valor 7 à variável nota1, o valor 8 à variável nota2 e o valor 9 à variável nota3 usando desestruturação?

const {nome: [nome1, nome2]} = aluno;

console.log(nome1, nome2);
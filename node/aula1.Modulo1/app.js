// **Podemos chamar o modulo sem especificar o seu caminho, 
// Na pasta node.modules, apenas usando o nome em string
// const path = require('path');
// const axios = require('axios');
// axios('https://jsonplaceholder.typicode.com/users')
// .then(response => {
//     return console.log(response.data);
// }).catch(e => {
//     return console.error('Error:', e);
// })

const {Pessoa, nome, sobrenome} = require('./mod1');
const p1 = new Pessoa('Luiz');
console.log(nome, sobrenome, p1);


// **Importando na varariavel via desestruturação;
// const {nome, sobrenome, falaNome} = require('./mod1');
// console.log(nome, sobrenome,',',falaNome());


// **Importando individual colocando dentro de uma variavel
// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;
// console.log(falaNome());


// **Importando individual colocando dentro de uma variavel
// const falaNome = require('./mod1').falaNome;
// // mod1.falaNome();
// console.log(falaNome()); 


// **Importando todos e acessando por instancia
// const mod1 = require('./mod1');
// mod1.falaNome();
// console.log(mod1);
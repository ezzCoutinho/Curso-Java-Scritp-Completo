/*
Object.values // retorna valores das chaves
Object.entries // retorna valores e chaves
Object.assign (des, any) // cópia primitiva
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread operator)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela a chave ou objeto)
Object.defineProperty (define uma propriedade)
Object.defineProperties (define várias propriedades)
*/

const produto = {nome:'Caneca', preco: 1.8};
// assign (objeto {}, variavel, +chave {})
const caneca = Object.assign({}, produto, {})

caneca.preco = 2.5;
caneca.nome = 'Copo de Vridro'
// console.log(produto);
// console.log(caneca);

// spread
const outraCoisa = {
    ...produto,
    material: 'porcelana'
};
// Alterando as propriedades de outraCoisa
Object.defineProperty( outraCoisa, 'nome', {
    configurable: false,
    writable: false
});
Object.defineProperty(outraCoisa, 'preco', {
    configurable: false,
    writable: false
})
// Object.Own verifica a propriedade de outraCoisa (obj)
// primeiro passa a variavel (obj), depois as chaves em string
console.log(Object.getOwnPropertyDescriptor(outraCoisa, 'nome'));

delete outraCoisa.preco;
console.log(outraCoisa);

// Object.values retorna os valores das chaves.
console.log(Object.values(outraCoisa));

// Object.entries retorna os valores e as chaves.
console.log(Object.entries(outraCoisa));

console.log('////////////////////////////////////////////////////');
// Desestruturação no for of
for (let [chave,valor] of Object.entries(outraCoisa)){
    console.log(chave, valor);
}
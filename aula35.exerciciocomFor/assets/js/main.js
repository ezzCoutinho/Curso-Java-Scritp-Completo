const elementos = [
    { tag: 'p', texto: 'Frase 1' }, // 0
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
];

const container = document.querySelector('.container'); // chamei o html no script
const div = document.createElement('div');// colocando uma div com tudo dentro, abrindo ela no começo

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto} = elementos[i]; // desestruturação do objeto
    let criandoTag = document.createElement(tag);// aqui eu estou criando os elementos 
// tagCriada.innerText = texto    ; // adicionando texto no chrome
    let textoCriado = document.createTextNode(texto); // adicionando o texto do objeto
    criandoTag.appendChild(textoCriado) // adicionando ele como filho da criandotag
    div.appendChild(criandoTag); // adicionando as tags dentro da div
}

container.appendChild(div); // fechando a div no final 
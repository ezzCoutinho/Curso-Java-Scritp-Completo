const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p'); // selecionando um cojunto dentro do paragrafos(div)

const estilosBody = getComputedStyle(document.body); // computando todos os elementos do css
const backgroundColorBody = estilosBody.backgroundColor; // adicionando a cor de fundo nesta variavel


for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody
    p.style.color = 'white';
}
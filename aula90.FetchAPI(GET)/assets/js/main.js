document.addEventListener('click', (e) => {
    const elemento = e.target;
    const tag = elemento.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(elemento);
    }
});

async function carregaPagina(elemento) {

    const href = elemento.getAttribute('href');

    try {
        const response = await fetch(href);

        if(response.status !== 200) throw Error('error 404!')

        const html = await response.text();
        carregaResultado(html)
    } catch (error) {
        console.error(error);
    }

}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;

}
























// fetch('pagina1.html')
// .then(resposta => {
//     // se o código da resposta for diferente de 200
//     if(resposta.status !== 200) throw new Error('ERROR 404 NOSSO');
//     return resposta.text();
// })
// .then(html => {
//     console.log(html);
// })
// .catch(e =>{
//     console.error(e);
// })
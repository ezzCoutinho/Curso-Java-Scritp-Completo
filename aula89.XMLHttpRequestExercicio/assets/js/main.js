// faz o ajax
// XMLHttpRequest

const requestAjax = obj => {
    return new Promise((resolve, reject) => {
        // construtor XMLHttpRequest
        const xhr = new XMLHttpRequest();
        //       get==form   URL     s/async
        xhr.open(obj.metodo, obj.link, true);
        // estamos mandando o open
        xhr.send();

        // escutador no carregamento
        xhr.addEventListener('load', (e) => {
            // se o status
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject({
                    // código HTTP 300 ~~ 500
                    codigoDeError: xhr.status,
                    mensagemDeError: xhr.statusText,
                });
            }
        });
    });
};

// escutador de click
document.addEventListener('click', (e) => {
    // colocando um alvo no evento
    const elemento = e.target;
    //           el,  nome da tg, minuscula
    const tag = elemento.tagName.toLowerCase();

    if (tag === 'a') {
        // preveni o padrão "e" da escutadora
        e.preventDefault();
        carregaPagina(elemento);
    }
});

async function carregaPagina(elemento) {
    try {
        // pegando o atributo de link href
    const href = elemento.getAttribute('href');

    // chamo a função e crio um objeto com duas chaves e dois métodos
    const objetoAjax = {
        metodo: 'GET',
        link: href,
    };

    //executando com await
    const response = await requestAjax(objetoAjax);
    carregaResultado(response);

    } catch(e) {
        console.error(e);
    }
    
}

function carregaResultado(response) {
    // pegando a class resultdo.
    const resultado = document.querySelector('.resultado');
    // adicionando resultado na pagina
    resultado.innerHTML = response;

}



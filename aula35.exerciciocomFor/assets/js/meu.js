function escopo(msg) {
    const element = document.querySelector('.container');
    element.innerHTML = ('');
    //                0 
    const elementos = [
        { tag: 'p', texto: 'Frase 1' }, // 0
        { tag: 'div', texto: 'Frase 2' },
        { tag: 'footer', texto: 'Frase 3' },
        { tag: 'section', texto: 'Frase 4' },
    ];

    const [tagp, tagdiv, tagfooter, tagsection] = elementos;

    function criarElemento (tagNome) { 
        const elemento = document.createElement(tagNome)
        return elemento;
    }

    const p = criarElemento('p');
    const d = criarElemento('div');
    const f = criarElemento('footer');
    const s = criarElemento('section');

    function adicionaElemento(adiciona) {
        element.appendChild(adiciona);
    }

    adicionaElemento(p);
    adicionaElemento(d);
    adicionaElemento(f);
    adicionaElemento(s);
 
    p.innerHTML = tagp.texto;
    d.innerHTML = tagdiv.texto;
    f.innerHTML = tagfooter.texto;
    s.innerHTML = tagsection.texto;


}


escopo();

const falarOi = function () {
    console.log('Hello World');
};

const objeto = {
    nome() {
        console.log('Matheus');
    },
    sobrenome() {
        console.log('Coutinho');
    }
};

setInterval(() => {
    console.log(`Flamengo na final`);
}, 1000);


const funcaoExecutadora = (funcao) => {
    funcao();
};

funcaoExecutadora(falarOi);
funcaoExecutadora(objeto.nome);
funcaoExecutadora(objeto.sobrenome);

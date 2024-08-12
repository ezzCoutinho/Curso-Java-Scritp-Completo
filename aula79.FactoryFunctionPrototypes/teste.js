// 705.484.450-52 070.987.720-03
/* 

7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237 somatoria

11 - (237 % 11) = 5 (primeiro digito)
if resultado > 9, considerado 0 

---------------------------------------------------------------


o último digito vem da primeira cnt
7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0 45 32 56  24 20 20 0  10 = 284 somatoria 

11 - (284 % 11) = 2 (primeiro digito)
if resultado > 9, considerado 0 

if (705.484.450-52 === 705.484.450-52) return 705.484.450-52
return `cpf inválido.`
*/

const valida = {

    valida () {
        const cpfFatiado = this.cpfLimpo.slice(0, -2);
        
        const digitoUm = this.criaDigitoIn(cpfFatiado);

        const digitoDois = this.criaDigitoIn(cpfFatiado + digitoUm);

        const cpf = cpfFatiado + digitoUm + digitoDois;
        
        if(cpf === this.cpfLimpo) return console.log(`CPF válido.`);

        return console.log(`CPF inválido`);

    },

    criaDigitoIn (cpfFatiado) {
        const cpfArray = Array.from(cpfFatiado);
        let regressiva = cpfArray.length + 1;
        const multiplicaESoma = cpfArray.reduce((argumento, valor) => {

            argumento += (regressiva * Number(valor));
            regressiva --;
            return argumento;

        }, 0);

        const digito = 11 - (multiplicaESoma % 11);
        return digito > 9 ? '0' : String(digito);
    
    }
};

const prototypeValidadorCpf = Object.assign({}, valida)

function validorCPF(recebeCPF) {
    return Object.create(prototypeValidadorCpf, {
        cpfLimpo: {
            value: recebeCPF.replace(/\D+/g, ''),
            enumerable: true,
            writable: true,
            configurable: false
        },
    })

}




const inicia = validorCPF('705.484.450-51')


inicia.valida();

console.dir(inicia);
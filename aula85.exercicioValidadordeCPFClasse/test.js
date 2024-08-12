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


class ValidadorCPF {
    constructor(entradaCPF) {
        this.entradaCPF = entradaCPF;

        Object.defineProperty(this, 'cpfLimpo', {
            get () {
                return entradaCPF.replace(/\D+/g, '')
            },
            configurable: false,
        })

        this.cpf = ''
    }
    

    logicaCPF () {
        const cpfFatiado = this.cpfLimpo.slice(0, -2);

        const digito1 = this.criaDigito(cpfFatiado);
        //                              705484450      5      = 2
        const digito2 = this.criaDigito(cpfFatiado + digito1);

        this.cpf = cpfFatiado + digito1 + digito2;

    }
    valida () {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(ValidadorCPF.numerosRep(this.cpfLimpo)) return false;
        this.logicaCPF();
        
        return this.cpf === this.cpfLimpo;
    
    }

    criaDigito (cpfFatiado) {
        const cpfArray = Array.from(cpfFatiado);
        let regressiva = cpfArray.length + 1;

        const somaTotal = cpfArray.reduce((argumento, valor) => {
            argumento += (regressiva * Number(valor));
            regressiva --;
            return argumento;
        }, 0)

        const digito = 11 - (somaTotal % 11);
        return digito > 9 ? '0' : String(digito);
    }

    static numerosRep (cpf) {
        const repete = cpf[0].repeat(cpf.length)
        return repete === cpf;
    }
}


// const inicia = new ValidadorCPF('973.881.700-57');


// if (inicia.valida()) {
//   console.log('CPF válido');
// } else {
//   console.log('CPF inválido');
// }

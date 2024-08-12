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

function ValidaCPF(cpfEnviado) {

    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: () => {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}
// método
ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    // cpf com 9 digitos
    const cpfParcial = this.cpfLimpo.slice(0, -2)
    // digito com 10
    const digito1 = this.criaDigito(cpfParcial)
    // digito com 11
    const digito2 = this.criaDigito(cpfParcial + digito1)
    
    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo; 
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressiva1 = cpfArray.length +1;
    const total  = cpfArray.reduce((argumento, valor) => {

        argumento += (regressiva1 * Number(valor));
        regressiva1 -- ; // regressiva --
        return argumento;

    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}

ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo; 
}


const cpf = new ValidaCPF('705.484.450-52');

console.log(cpf.valida());
function VerificaCPF (recebeCPF) {

    Object.defineProperty(this, 'cpfClean', {
        enumerable: true,
        value: recebeCPF.replace(/\D+/g, ''),
        writable: true,
        configurable: false,
    });

    this.recebeCPF = recebeCPF;
}

// metodo válida criaDigito
VerificaCPF.prototype.valida = function () {
    // fatiando cpf clean
    const cpfClean = this.cpfClean.slice(0, -2);
    // ligando o metodo criaDigito com this.cpfClean
    const digitoUm = this.criaDigito(cpfClean)
    
    const digitoDois = this.criaDigito(cpfClean + digitoUm)

    const cpfValido = cpfClean + digitoUm + digitoDois;
    
    // condições.
    if(this.numerosRepetidos()) return `o cpf: ${this.recebeCPF}, está se repetindo`;
    
    else if(cpfValido === this.cpfClean) return `o cpf: ${this.recebeCPF}, é válido`;
    
    else if (cpfValido !== this.cpfClean) return `o cpf: ${this.recebeCPF}, está inválido`
        
    else if(typeof this.cpfClean === 'undefined') return `o cpf: ${this.recebeCPF}, está indefinido`;
    
}

VerificaCPF.prototype.criaDigito = function (cpfClean) {
    // convertendo string em array
    const cpfArray = Array.from(cpfClean);
    // adicionando +1 indice, totalizando 10
    let regressiva = cpfArray.length +1;
    
    // multiplico os valores do array a cada decremento da regressiva
    const multiplicaMap = cpfArray.map(valor => { return Number(valor) * regressiva --;})

    // somo todos os valores do map usando reduce.
    const somaReduce = multiplicaMap.reduce((argumento, valor) => {
        argumento += valor;
        return argumento;
    }, 0);

    // condição e convertendo array em string.
    const digito = 11 - (somaReduce % 11);
    return digito > 9 ? '0' : String(digito);
}

// condição de repetição.
VerificaCPF.prototype.numerosRepetidos = function () {
    const repete = this.cpfClean[0].repeat(this.cpfClean.length)
    return repete === this.cpfClean;
}


// entrada na instância da função
const inicia = new VerificaCPF('111.111.111-11');

console.log(inicia.valida());
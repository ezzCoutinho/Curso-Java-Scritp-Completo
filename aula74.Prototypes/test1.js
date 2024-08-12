// Crie uma função construtora Veiculo que recebe marca e modelo como parâmetros e defina um método info no prototype que retorna uma string com informações sobre o veículo (por exemplo, "Marca: Chevrolet, Modelo: Onix").

function Veiculo (marca, modelo) {
    this.marca = marca;
    this.modelo= modelo;
}

Veiculo.prototype.info = function (){
    return `Marca: Volkswagen, Modelo: Santana. `
}

const v1 = new Veiculo('Chevrolet', 'Onix');

console.log(v1);

// Crie uma função construtora Carro que herda de Veiculo e adiciona um método ligar ao prototype que exibe "O carro está ligado!".


function Carro (marca, modelo) {
    Veiculo.call(this, marca, modelo);
}

Carro.prototype = Object.create(Veiculo.prototype);
Carro.prototype.ligar = function () {
    return `O carro está ligado!`
}

const c1 = new Carro();


console.dir(c1);
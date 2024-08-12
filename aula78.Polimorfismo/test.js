// Crie uma classe Animal com um método falar() que é sobrescrito por subclasses como Cachorro, Gato e Passaro, cada um com sua própria implementação de falar().

function Animal (falar, animal) {
    this.falar = falar;
    this.animal = animal;
}

Animal.prototype.som = function () {
    
    if(this.animal === 'Cachorro') {
        console.log(`${this.animal} está latindo, ${this.falar}`);
    }

    if(this.animal === 'Gato') {
        console.log(`${this.animal} está miando, ${this.falar}`);
    }

    if(this.animal === 'Passaro') {
        console.log(`${this.animal} está cantando, ${this.falar}`);
    }

    return false;
}

function Cachorro (falar, animal) {
    Animal.call(this, falar, animal);
}

Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.constructor = Cachorro;

function Gato (falar, animal) {
    Animal.call(this, falar, animal);
}

Gato.prototype = Object.create(Animal.prototype);
Gato.prototype.constructor = Gato;

function Passaro (falar, animal) {
    Animal.call(this, falar, animal);
}

Passaro.prototype = Object.create(Animal.prototype)
Passaro.prototype.constructor = Passaro;

const c1 = new Cachorro ('Au au!', 'Cachorro');

c1.som();

const g1 = new Gato ('Miau!', 'Gato');

g1.som();

const p1 = new Passaro ('Assobio!', 'Passaro');

p1.som();




// Implemente um programa que tenha uma função emitirSom(animal) que aceita um objeto animal e chama o método falar() do animal.


// Crie uma hierarquia de classes para representar diferentes formas geométricas, como Circulo, Quadrado e Triangulo, cada um com um método area() que calcula a área da forma. Implemente um programa que calcula a área de várias formas geométricas e exibe o resultado.

//Crie uma classe Veiculo com métodos acelerar() e frear(). Crie subclasses como Carro, Moto e Caminhao, cada um com sua própria implementação de acelerar() e frear().


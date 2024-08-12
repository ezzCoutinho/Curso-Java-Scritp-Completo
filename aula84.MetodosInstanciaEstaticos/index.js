class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume () {
        this.volume += 2;
    }

    abaixarVolume () {
        this.volume -= 2;  
    }
    // método estatico
    static trocarPilha () {
        console.log('Pilhas trocadas.');
        return;
    }
}
//criando a instancia
const controle1 = new ControleRemoto('LG');
//instancia e método
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

//static/class  método
ControleRemoto.trocarPilha();
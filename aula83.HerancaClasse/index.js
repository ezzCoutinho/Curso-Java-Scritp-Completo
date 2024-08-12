// SuperClass
class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar () {
        // se me chamar 2x
        if(this.ligado) {
            console.log(`${this.nome} já está ligado.`);
            return;
        }
        
        // se ligado retorne true
        this.ligado = true;
    }

    desligar () {
        // se me chamar 2x
        if(!this.ligado) {
            console.log(`${this.nome} já está desligado.`);
            return;
        }
        
        // se não ligado retorne false
        this.ligado = false;
    }
} 

// Console é uma extensão de Dispostivo
class Console extends DispositivoEletronico{
    constructor(nome, cor, modelo) {
        // sub recebe as xchaves do pai
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const c1 = new Console('Xbox', 'Preta', 'Xbox One X');

// c1.ligar();
// c1.ligar();
// c1.desligar();
// c1.desligar();

// Smartphone é uma extensão de Dispositivo
class Smartphone extends DispositivoEletronico {
        // sub recebe as xchaves do pai
    constructor(nome, processador, modelo, rom, espacoUsado) {
        super(nome)
        this.processador = processador;
        this.modelo = modelo;
        this.rom = rom;
        this.espacoUsado = espacoUsado;
    }

    espacoLivre () {

        let espaco = 0
        espaco += (this.rom -= this.espacoUsado);
        return console.log(`Você tem: ${espaco} Gigabytes de espaço livre em seu ${this.modelo}`)

    }
}

const s1 = new Smartphone('Pocophone', 'SnapDragon 855+', 'Poco X3 PRO', 256, 132);

s1.ligar();
s1.ligar();

s1.espacoLivre();
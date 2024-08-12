/*this. -> é usado quando um objeto não está no parametro de 
uma função, podendo assim adicionalo sem levar syxtaxerror,
*/
// factory function (Função fabricadora)
// constructor function (Função construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        // seta um valor ganha getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        // Setter
        set nomeCompleto (valor) {
            // separando por espaço.
            valor = valor.split(' ');
            // apagando o primeiro indice do Array e salvando
            // ele no setter da variavel p1
            this.nome = valor.shift();
            // une El de Ary em uma string, sep em spac
            this.sobrenome = valor.join(' ');
        },
        fala: function(assunto) {
            return `${this.nome} está ${assunto}.`
        },
        altura: altura,
        peso: peso,
        // Getter transforma uma function, em um objeto normal
        get imc () {
            const calculoIMC = this.peso / (this.altura * this.altura);
            return calculoIMC.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 82);
p1.nomeCompleto = 'Matheus Lopes Coutinho';
const p2 = criaPessoa('Mac', 'Allister', 1.72, 75);

console.log(p1.nomeCompleto);
console.log(p2.nomeCompleto, p2.imc);

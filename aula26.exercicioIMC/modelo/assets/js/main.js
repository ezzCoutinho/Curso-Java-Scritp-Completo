function meuEscopo() { // 
    const form = document.querySelector('.form'); // class
    
        form.addEventListener('submit', function recebeEventoForm (evento){
        evento.preventDefault(); // ele envia um formulario, por isso tem que ter esse preventDefault.
        const inputPeso = evento.target.querySelector('#peso') // evento.target. substitui o .document 
        const inputAlturaEmM = evento.target.querySelector('#altura'); // input string 

        const peso = Number(inputPeso.value); // converto 
        const alturaEmM = Number(inputAlturaEmM.value)


        function setResultado (msg, isValid) { // crio uma fuction com dois parametros
            const resultado = document.querySelector('.resultado'); // aqui eu pego o resultado da div do HTML
            resultado.innerHTML = ''; // deixo o inner da div vazia
            
            const p = criaParagrafo();  function criaParagrafo () { // crio a variavel junto com a fuction 
                const p = document.createElement('p')// estou criando um paragrafo <p></p> no script
                return p; // retorne ela mesma 
            }
    
            if (isValid) {
                p.classList.add('paragrafo-resultado'); // estou colocando uma class ao paragrafo que foi criado no script, ele vai para o css
            //Se for true fica verde, essa class eu uso no css
            } else { // se não fique vermelha, essa bad foi aqui para mudar de cor no css
                p.classList.add('bad')
            }
            p.innerHTML = msg; // retorno o parametro
            resultado.appendChild(p); // adicionando p no ultimo elemento filho
            
        }
    
        setResultado();
    

        if (!peso) { // se for NaN ->
            setResultado('Peso inválido', false) // false pois eu vou colocar a cor vermelha
            return // validou como NaN ele retorna ao começo

        } else if (!alturaEmM) { // se for NaN ->
            setResultado('Altura inválida', false) // false pois eu vou colocar a cor vermelha
            return // validou como NaN ele retorna ao começo
        }

        const imc = getImc(peso, alturaEmM); // crio essa const com o input ja em number
        function getImc (peso, alturaEmM) { // aqui eu faço o calculo imc
            const imc = peso / (alturaEmM * alturaEmM)
            return imc.toFixed(2); // coloco duas casas decimais       
            }

        const nivelImc = getNivelImc(imc); // pego o imc da get Imc
        const msg = `Seu IMC é ${imc} (${nivelImc})` // crio essa outra variavel para mostrar na div

        setResultado(msg, true); // seto ela como verdadeira e chamo a variavel

        function getNivelImc (imc) { // faço uma fuction com um array, e faços if idepedentes, do maior indice de massa corporeal para o menor
            const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
            if (imc >=39.9){
                return nivel [5];
            } 

            if (imc >=34.9) {
                return nivel [4];
            }

            if (imc >=29.9) {
                return nivel [3];
            }
            
            if (imc >=24.9) {
                return nivel [2];
            }
            
            if (imc >=18.5){
                return nivel [1];
            }
            
            if (imc <=18.49) {
                return nivel [0];
            }
        }


        })




};


meuEscopo();

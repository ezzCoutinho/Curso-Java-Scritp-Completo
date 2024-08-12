function meuEscopo() {
    const form = document.querySelector('.form');
    
        form.addEventListener('submit', function recebeEventoForm (evento){
        evento.preventDefault(); 
        const inputPeso = evento.target.querySelector('#peso')
        const inputAlturaEmM = evento.target.querySelector('#altura');

        const peso = Number(inputPeso.value);
        const alturaEmM = Number(inputAlturaEmM.value)

        if (!peso) { // se for NaN ->
            setResultado('Peso inválido', false) // false pois eu vou colocar a cor vermelha
            return // validou como NaN ele retorna ao começo

        } else if (!alturaEmM) { // se for NaN ->
            setResultado('Altura inválida', false) // false pois eu vou colocar a cor vermelha
            return // validou como NaN ele retorna ao começo
        }

        const imc = getImc(peso, alturaEmM);
        const nivelImc = getNivelImc(imc);
        const msg = `Seu IMC é ${imc} (${nivelImc})`

        setResultado(msg, true);

        function getNivelImc (imc) {
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

        function getImc (peso, alturaEmM) { 
        const imc = peso / (alturaEmM * alturaEmM)
        return imc.toFixed(2);           
        }

        })



    function criaParagrafo () {
        const p = document.createElement('p')// estou criando um paragrafo <p></p>
        return p;
    }

    function setResultado (msg, isValid) {
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = '';
        const p = criaParagrafo();

        if (isValid) {p.classList.add('paragrafo-resultado'); // estou colocando um class ao paragrafo que foi criado no script} 
        } else {
            p.classList.add('bad')
        }
        p.innerHTML = msg;
        resultado.appendChild(p);
        
    }

    setResultado();

};


meuEscopo();

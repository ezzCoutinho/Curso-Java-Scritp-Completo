function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
    };

    this.apagarUM = () => {
        this.display.value = this.display.value.slice(0, -1);
        this.display.value.focus();
    };

    this.apagarTudo = () => {
        this.display.value = '';
        this.display.value.focus();
    };

    this.realizaConta = () => {
        let contaRealizada = this.display.value;

        try{
            contaRealizada = eval(contaRealizada);

            if(!contaRealizada) {
                alert('Conta inválida.');
                return;
            }

            this.display.value = contaRealizada;
        } catch(e) {
            alert('Conta inválida.');
            return;
        };

    };

    this.cliqueBotao = () => {
        document.addEventListener('keypress', (e) => {

            if(e.keyCode === 13){
                this.realizaConta();
            }
            // console.log(`Tecla pressionada: ${e.key}, code da tecla: ${e.keyCode}`);
        })
    }

    this.capturaCliques = () => {
        document.addEventListener('click', (e) => {
            const elemento = e.target;

            if (elemento.classList.contains('btn-num')) {
                this.btnParaDisplay(elemento);
            }

            if (elemento.classList.contains('btn-del')) {
                this.apagarUM();
            }

            if (elemento.classList.contains('btn-clear')) {
                this.apagarTudo();
            }

            if (elemento.classList.contains('btn-eq')) {
                this.realizaConta();
            }
        });
    };

    this.btnParaDisplay = (btn) => this.display.value += btn.innerText;

}

const calculadora = new Calculadora();
calculadora.inicia();

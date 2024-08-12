(function () {
    function criaCalculadora() {

        return {
            display: document.querySelector('.display'),


            inicia () {
                this.cliqueBotao();
                this.clearDisplay();
                this.cliqueTeclado();
            },

            clearDisplay: function() {
                this.display.value = '';
                this.display.focus();
            },

            limpaUm: function () {
                this.display.value = this.display.value.slice(0, -1);
                // string - 1 
            },

            realizaConta: function () {
                let contaRealizada = this.display.value;
                
                try {
                    contaRealizada = eval(contaRealizada);

                    if(!contaRealizada){
                        alert `Conta inválida`;
                        return;
                    }

                    this.display.value = contaRealizada;
                } catch (e) {
                    alert `conta inválida`;
                    return;
                }
            },

            cliqueTeclado: function () {
                document.addEventListener('keypress', (e) => {
                    if (e.keyCode === 13) {
                        this.realizaConta();
                    }
                })
            },


            cliqueBotao: function () {
                // this -> calculadora
                document.addEventListener('click', (e) => {
                    const elemento = e.target;

                    if (elemento.classList.contains('btn-num')){
                        this.btnParaDisplay(elemento.innerText);
                    } // bind altera o contexto do this

                    if (elemento.classList.contains('btn-clear')){
                        this.clearDisplay();
                    }

                    if (elemento.classList.contains('btn-del')){
                        this.limpaUm();
                    }

                    if (elemento.classList.contains('btn-eq')){
                        this.realizaConta();
                        this.cliqueTeclado();
                    }

                });
            },
            
            btnParaDisplay(valor) {
                this.display.value += valor
                this.display.focus();
            },





        };
    }

    const calculadora = criaCalculadora();
    calculadora.inicia();
})();

class ValidaFormulario {
    constructor() {
        // get form
        this.formulario = document.querySelector('.formulario');
        // executando evento
        this.evento();
    }

    evento() {

        // Colocando um escutado(e) no submit da pag
        this.formulario.addEventListener('submit', e => {

            //executando o preventD e recebendo(evn) manipulador
            this.handleSubmit(e);
        })
    }
    
    // previnindo evento de acontecer
    handleSubmit(e) {
        e.preventDefault();

        // executando a checagem
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        // true         and true
        if(camposValidos && senhasValidas){
            alert('Formulário enviado');

            // recarrega a pagina
            this.formulario.submit();
        }
    }

    camposSaoValidos() {
        // flag se tiver true, vai set enviado
        let valid = true;

        // removendo o error, qnd clicar no submit
        for (let errorText of this.formulario.querySelectorAll('.div-error')) {
            errorText.remove();
        }
        // para cada campo do formulario, slc ALL ctn: validar
        for (let campo of this.formulario.querySelectorAll('.validar')) {

            // pegando o irmao mais velho, d cd cmp e add innerText. do if
            const label = campo.previousElementSibling.innerText;

            // se, vazio
            if (!campo.value) {
                // executando cE Campo e Mensagem
                this.createError(campo, `Campo "${label}" não pode estar em branco.`);
                
                // não vai ser enviado o formulário.
                valid = false;
            }

            // se campo contem class cpf
            if (campo.classList.contains('cpf')) {

                //se for diferente de valida CPF
                if (!this.validaCPF(campo)) {

                    // não vai ser enviado o formulário.
                    valid = false;
                }
            }

            // se campo contem class usuario
            if(campo.classList.contains('usuario')) {

                //não é um validaUsuario(do campo)
                if(!this.validaUsuario(campo)) {

                    // não vai ser enviado o formulário.
                    valid = false
                }
            }
        }

        return valid;
    }


    senhasSaoValidas () {
        
        //flag true.
        let valid = true;

        // substitui campo, com class.
        const senha = this.formulario.querySelector('.senha');
        
        // substitui campo, com class.
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        // valor senha diferente valor rpt senha
        if(senha.value !== repetirSenha.value) {

            // depois do evento, Mensagem
            this.createError(senha,'Senha e repetir senha, devem ser iguais.');

            // depois do evento, Mensagem
            this.createError(repetirSenha, 'Senha e repetir senha, devem ser iguais.');

            // flag false.
            valid = false;
        }

        // se o indice da senha < ou >
        if(senha.value.length < 6 || senha.value.length >12) {
            // depois do evento, Mensagem
            this.createError(senha, 'Senha precisa conter entre 6 a 12 caracteres.')

            // flag false.
            valid = false;
        }
        
        // flag me retorne true.
        return valid;
    }

    validaUsuario (campo) {
        // usuario é igual campo.malue
        const usuario = campo.value;

        // flag true;
        let valid = true;

        // se usuario contem > q
        if(usuario.length > 12 || usuario.length < 3){

            // depois do evento, mensagem
            this.createError(campo, `Usuário deve conter de 3 a 12 cacacteres`)

            // flag false.
            valid = false;

        }

        // se o usuario não contém letras e numeros
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){

            // depois do evento mensagem
            this.createError(campo, `Usuário só pode conter letras e/ou números`)

            // flag false
            valid = false;

        }

        // flag true.
        return valid;
    }

    validaCPF(campo) {
        let valid = true;
        // instancia
        const cpf = new ValidaCPF(campo.value);

        // se não for cpf
        if (!cpf.valida()) {
            this.createError(campo, `CPF inválido.`);
            valid = false
        }

        // caso contrario true;
        return valid;
    }

    createError(campo, msg) {

        // criando um element html.
        const div = document.createElement('div');

        // add ele no parametro msg.
        div.innerHTML = msg;

        // add uma class a ele.
        div.classList.add('div-error');

        // adicionando ele depois do (evento) seu irmão mais velho
        campo.insertAdjacentElement('afterend', div);

    }

}

// instanciando a classe e executando.
const valida = new ValidaFormulario();

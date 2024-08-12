function escopo() {
    const inputTarefa = document.querySelector('.input-nova-tarefa');

    const buttonTarefa = document.querySelector('.btn-add-tarefa'); 

    const tarefas = document.querySelector('.tarefas');

    function criaLi() {
        const li = document.createElement('li');
        return li;
    }

    document.addEventListener('keypress', function(e){
        if(e.keyCode === 13){
            if (!inputTarefa.value) return; // estou proibindo de ser um texto branco
            criaTarefa(inputTarefa.value); // vai adicionar na pagina
        }
    });

    function limpaInput() {
        inputTarefa.value = '';
        inputTarefa.focus();  // fica em click a caixa de texto.
    }

    function criaBotaoApagar (li) {
        li.innerText += ' '; // espaço entre o li e o apagar
        const botaoApagar = document.createElement('button');
        botaoApagar.innerText = 'Apagar'; // criando um nome para o botao
        botaoApagar.setAttribute('class', 'apagar');
        botaoApagar.setAttribute('title', 'Apagar esta tarefa.');
        li.appendChild(botaoApagar)
    }


    function criaTarefa(textoInput) {
        const li = criaLi(); // toda vez que essa function for 
        //chamada ela cria uma lista.
        li.innerText += textoInput;
        tarefas.appendChild(li); // se torna ultimo filho 
        // da ul
        limpaInput();
        criaBotaoApagar(li);
        salvarTarefas()
    }

    

    buttonTarefa.addEventListener('click', function (e) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
        
    })

    document.addEventListener('click', function(e){
        const elemento = e.target;

        if (elemento.classList.contains('apagar')){
            elemento.parentElement.remove(); // removendo o pai
            salvarTarefas()
        }
    })

    function salvarTarefas() { // salvando as tarefas 
        const liTarefas = tarefas.querySelectorAll('li'); // pegando todas as tarefas do criaTarefa
        const listaDeTarefas = [];

        for (let tarefa of liTarefas){
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
            listaDeTarefas.push(tarefaTexto);
        }
        const tarefasJSON = JSON.stringify(listaDeTarefas);
        localStorage.setItem('tarefas', tarefasJSON);

    }


    function adicionaTarefasSalvas() {
        const tarefas = localStorage.getItem('tarefas') // de up
        const listaDeTarefas = JSON.parse(tarefas);

        for (let tarefa of listaDeTarefas){
            criaTarefa(tarefa);
        }
    }

    adicionaTarefasSalvas();



}

escopo();
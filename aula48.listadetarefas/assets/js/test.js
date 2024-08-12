function escopo() {
    const inputTarefa = document.querySelector('.input-nova-tarefa');

    const buttonTarefa = document.querySelector('.btn-add-tarefa');

    const tarefas = document.querySelector('.tarefas');
    // criando tudo, e executando 3 function aqui
    function criaTarefa(textoInput) {
        const li = criaLi();
        li.innerText += textoInput;// add txt html
        tarefas.appendChild(li) // filha da ul
        limpaInput(); // function executada
        criaBotaoApagar(li); // function executada
        salvarTarefas();
    }
    // Não pode ser um input branco
    buttonTarefa.addEventListener('click', function(e) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);

    });

    // criando as linhas.
    function criaLi() {
        const li = document.createElement('li');
        return li;
    }
    // retornando o input para branco junto com focus
    function limpaInput() {
        inputTarefa.value = ''; // enviou, apagou!
        inputTarefa.focus();// focus click
    }
    // criando um botao e adicionando class html e tornando ele filho do li.
    function criaBotaoApagar(li) {
        li.innerText += ' '; // spc ent linha e ele
        const botaoApagar = document.createElement('button');
        botaoApagar.innerText = 'Delete'; // adicionando o nome do botao
        botaoApagar.setAttribute('class', 'apagar'); // att html
        botaoApagar.setAttribute('title', 'Apaga esta tarefa.'); // title: Apaga esta tarefa.
        li.appendChild(botaoApagar); // botao é filho do parametro da function.
    }
    // adiciona um escutador no click, class= 'apagar', e remove o pai dela sempre, chamando a fuction salvarTarefas:
    document.addEventListener('click', function(e) {
        const elemento = e.target; // escutador

        if (elemento.classList.contains('apagar')) {
            elemento.parentElement.remove(); // remove seu pai
            salvarTarefas();
        }
    });
    // adiciona um escutador de tecla, e seleciono a tecla ente, onde ela envia a tarefa(inputaTarefa.value);
    document.addEventListener('keypress', function(e) {
        if (e.keyCode === 13) {
            if (!inputTarefa.value) return;
            criaTarefa(inputTarefa.value);
        }
    });
    // seleciono todos os li filhos da ul, itero sobre elas, apago os espaços, e adiciono no final
    function salvarTarefas() {
        const liTarefas = tarefas.querySelectorAll('li');
        const listaDeTarefas = [];

        for (let tarefa of liTarefas) {
            let tarefaTexto = tarefa.innerText; // os indices serão adicionados
            tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
            listaDeTarefas.push(tarefaTexto); // cada indice será adicionado em ultimo lugar do array
        }
        // converto JSON para strings e salvo no navegador, set item: nome, e variavel(existente);
        const tarefasJSON = JSON.stringify(listaDeTarefas); // convertendo para string
        localStorage.setItem('tarefas', tarefasJSON);

    }
    // aqui eu vou selecionar o item que eu setei 'tarefas' e vou converter para ARRAYS e itero criando tarefa por tarefa.   
    function adicionaTarefasSalvas() {
        const tarefas = localStorage.getItem('tarefas');
        const listaDeTarefas = JSON.parse(tarefas); // convertendo para ARRAYS

        for (let tarefa of listaDeTarefas){
            criaTarefa(tarefa);
        }
    }

    adicionaTarefasSalvas();
    
}

escopo();
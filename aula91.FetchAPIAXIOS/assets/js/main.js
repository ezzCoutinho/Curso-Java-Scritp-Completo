axios('pessoas.json')
    .then(response => carregaElementosNaPagina(response.data));

function carregaElementosNaPagina (json) {
    const h1 = document.createElement('h1');
    h1.textContent = 'Pessoas';
    const resultado = document.createElement('div');
    resultado.classList.add('resultado');

    const container = document.querySelector('.container');
    
    container.appendChild(h1);
    container.appendChild(resultado);
    
    const table = document.createElement('table');
    table.classList.add('tabela');

    
    for (let pessoa of json) {
        const tr = document.createElement('tr');
        
        let tdNome = document.createElement('td');
        tdNome.innerHTML = pessoa.nome;
        tr.appendChild(tdNome);
        
        let tdIdade = document.createElement('td');
        tdIdade.innerHTML = pessoa.idade
        tr.appendChild(tdIdade);
        
        let tdSalario = document.createElement('td');
        tdSalario.innerHTML = pessoa.salario
        tr.appendChild(tdSalario);
        
        table.appendChild(tr);
    }
    
    resultado.appendChild(table);
}
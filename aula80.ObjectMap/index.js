const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'},
];

/*const novasPessoas = {};

// para cada pessoa de pessoas
for (const pessoa of pessoas) {
    // const objeto {id} vai ter pessoa
    const {id} = pessoa;
    // novaspessoas recebe id e faz uma copia de pessoa
    novasPessoas[id] = {...pessoa};
}
*/

const novasPessoas = new Map();

// para cada pessoa de pessoas
for (const pessoa of pessoas) {
    // atribuição via desestruturação
    const {id} = pessoa;
    // novaspessoas recebe id e faz uma copia de pessoa
    novasPessoas.set(id, {...pessoa});
}

for (const [identificador, {id, nome}] of novasPessoas) {
    console.log(identificador, id, nome);
}

console.log(novasPessoas);
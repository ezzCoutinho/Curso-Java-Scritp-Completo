const nomes = ['Karol', 'Matheus', 'Adriana', 'Aline', 'Valdete'];
const outroNome = 'Silva';
nomes.push(outroNome);

for (let nome of nomes){
    
    console.log(nome);
}


function funcao(base = 0) {
    for (let numero of arguments){
        base += numero
    }
    console.log(base -1);
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);




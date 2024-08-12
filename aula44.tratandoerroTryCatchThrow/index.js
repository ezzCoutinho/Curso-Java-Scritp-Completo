// throw -> lançar // lança o error
// try -> tente // vai tentar executar aqui
// catch -> pega // trata // se cair aqui é por que deu error



// try {
//     console.log(naoExisto);
// } catch (err) {
//     console.log('Esta unidade não existe.');
// }

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('Oooops!');
    }

    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch (err){
    // console.log(err);
    console.log('Oooops!');
}

try {
    // Executa quando não tiver errors
} catch (e) {
    // Executa quando tiver errors
}
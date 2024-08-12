//             11 indices
const nome = ['Luiz', 'Otávio', 'Henrique']

for (let i = 0; i < nome.length; i++) {
    // console.log(nome[i]); // iterando 
}

console.log('#################');

for (let indice in nome) { // iterando
    // console.log([indice], nome[indice]); // colocando indice
}

console.log('#################');

for (let valor of nome) { // iterando com o for recomendado
    // console.log(valor); // esse não tem como colocar indice
}

nome.forEach(function(valor, indice){ // colocando indice em For of 
    console.log(indice, valor);
})
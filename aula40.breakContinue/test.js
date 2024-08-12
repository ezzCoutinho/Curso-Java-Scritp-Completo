const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 44, 55, 66]


for (let valor of numeros) {

    if (valor === 4) { // pulei o 4
        continue; 
    }

    if (valor === 7) {
        console.log(`O ${valor} foi achado, quebrando o laço...`);
        break;
    }

    console.log(valor);
}


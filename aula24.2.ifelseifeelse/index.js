// Se (numero >=0 && numero <=5) ocorrer, faça isso {código}
// Se não {o código}

const numero = 11;

if (numero <=11){
    console.log('Aqui é outro if sem conexão com o if de baixo↓');
}

if (numero >=0 && numero <=5) {
    console.log(`O ${numero} está entre 0 a 5`);
} else if (numero >=6 && numero <=8){
    console.log(`O ${numero} está entre 6 a 8`);
} else if ('quebrando' === 'quebrando') { // aqui ele para o código e quebra ele
    console.log('Estou quebrando o bloco if com um literal');
} else if (numero >=9 && numero <=11) {
    console.log(`O ${numero} esta entre 9 a 11`);
} else {
    console.log(`O ${numero} não está entre 0 a 11.`);
}




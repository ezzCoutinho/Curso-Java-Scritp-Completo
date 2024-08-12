// Desviar o fluxo da nossa programação quando necessario

// if pode ser usado sozinho
// else if, precisa de if antes, pode ter quantos eu quiser
// so posso ter um else na checagem 
// else pode ser usado com if ou else if, e pode ser aplicado 1x
// if = verdadeiro, else if = verdadeiro, else = false


const hora = 54

if (hora >= 0 && hora <= 11) { // bloco if, sim
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) { // quatro condições, ou 
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else { // false
    console.log(`Essa hora: ${hora}, não existe.`);
}

const temSol = false;

if (temSol) {
    console.log('Tem sol'); // apenas uma condição, sim ou não
}else {
    console.log('Não tem sol');
}


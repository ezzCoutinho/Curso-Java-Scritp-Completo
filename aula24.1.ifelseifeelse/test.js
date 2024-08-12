const horaCerta = 88;

if (horaCerta >= 0 && horaCerta <= 11) {
    console.log('Bom Dia');
} else if (horaCerta >= 12 && horaCerta <= 17) { // bloco if com AND
    console.log('Boa Tarde');
} else if (horaCerta >= 18 && horaCerta <= 23){
    console.log('Boa Noite');
} else {
    console.log(`Essa hora: ${horaCerta}, não existe. Tenha um ótimo dia`);
}

const temSol = !true; // usei diferente 
const temGrana = false;
const temChave = !false;

if (temGrana || temChave || temSol) { // bloco if com OR 
    console.log('Vou sair hoje');
} else {
    console.log('Não vou sair hoje');
}

const toDoente = false;
const bezetacil = true;

if (toDoente || bezetacil) { // bloco if com OR
    console.log('Irei no hospital');
} else {
    console.log('Não irei ao hospital');
}
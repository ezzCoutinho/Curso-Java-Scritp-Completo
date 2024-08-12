/* 
Luiz Otávio Miranda tem 30 anos, pesa 84kg tem 1.8 de altura e seu IMC é de 25.9259
Luiz OTavio nasceu em 1980
*/
const nome = 'Matheus';
const sobreNome = 'Lopes Coutinho';
const idade = 24 ; 
const peso = 91;
const alturaEmM = 1.70;
let imc;
let anoNascimeno;
imc = peso / (alturaEmM * alturaEmM);
anoNascimeno = 2024 - idade;
console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmM} de altura e seu IMC é de: ${imc.toFixed(2)}. ${nome} nasceu em ${anoNascimeno}.`)
// https://www.w3schools.com/js/js_dates.asp
//  segundos * segundos * horas * milesimos de segundos
const tresHoras = 60 * 60 * 3 * 1000;

//  segundos * segundos * horas * milesimos de segundos
const umDia = 60 * 60 * 24 * 1000

const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix, ou epoca 

//janeiro = 0, dezembro = 11
//  ano, mes 0, dia, hora, minuto, segundo e milesegundos
const d = new Date(2024, 3, 5, 10, 40, 60)

// console.log('Dia:', d.getDate());
// console.log('Mês:', d.getMonth());
// console.log('Ano:', d.getFullYear());
// console.log('Hora:', d.getHours());
// console.log('Minutos:', d.getMinutes());
// console.log('Segundos:', d.getSeconds());
// console.log('Milli segundos:', d.getMilliseconds());
// console.log('Dia da semana:', d.getDay());

// o mes aqui começa do 1 ou 12
// ano, mes 1, dia, hora, minuto, segundos, miles segundos
const dataString = new Date('2024-03-05 10:50:59.567')

// console.log('Dia:', dataString.getDate());
// console.log('Mês:', dataString.getMonth() + 1); // 0 -> 11
// console.log('Ano:', dataString.getFullYear());
// console.log('Hora:', dataString.getHours());
// console.log('Minutos:', dataString.getMinutes());
// console.log('Segundos:', dataString.getSeconds());
// console.log('Milli segundos:', dataString.getMilliseconds());
// console.log('Dia da semana:', dataString.getDay()); // 0 -> domingo, 6 -> sábado

// console.log(Date.now()); // pegando o dia atual geral com o marco 0

const milliSegundos = new Date(1709648140994) // as vezes bancos de dados podem salvar assim a data.

// console.log(milliSegundos.toString());


const datA = new Date();

function zeroAesquerda (numeroDadatA) {
    // se o numero for maior que 10 retorne o num, se não retorne o 0 na frente do numero 
    return numeroDadatA >= 10 ? numeroDadatA : `0${numeroDadatA}`
}

function formataData(data) {
    const dia = zeroAesquerda(datA.getDate());
    const mes = zeroAesquerda(datA.getMonth() + 1); // corrigindo
    const ano = zeroAesquerda(datA.getFullYear());
    const hora = zeroAesquerda(datA.getHours());
    const min = zeroAesquerda(datA.getMinutes());
    const segundos = zeroAesquerda(datA.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${segundos}`
}


const dia = formataData(); // ativando a fuction

console.log(dia);

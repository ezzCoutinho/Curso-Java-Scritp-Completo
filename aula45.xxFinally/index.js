// try {
//     // console.log(a);
//     console.log(`Abri um arquivo.`);
//     console.log(`Manipulei o arquivo e gerou error.`);
//     console.log(`Fechei o arquivo.`);

//     try{
//         console.log(b);
//     } catch(e){
//         console.log(`Error dentro da ninhada.`);
//     } finally{
//         console.log(`Finally da ninhada.`);
//     }
// } catch(e) {
//     console.log('Tratando o error.');
// } finally {
//     console.log(`INDEPEDENTE DA SITUAÇÃO, SEREI EXECUTADO.`);
// }

function rH(data) { //    ===     
    if (data && !(data instanceof Date)) { // se a data for enviada e a data não for uma instancia de date ->
        throw new TypeError('Esperando instância de Date.');// pego o error e defino typer Error.
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', { timeStyle: 'medium' });
}


try {
    const data = new Date('01-01-1970 12:30:01') // dateString, istancia de date
    const hora = rH();
    console.log(hora);
} catch (e) {
    // console.log(`Hora fora da instância do Date.`);
} finally {
    console.log(`Tenha um ótimo dia.`);
}



/*
return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
});
*/
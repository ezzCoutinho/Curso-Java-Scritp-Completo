// function meuEscopo () {
//     const resultado = document.querySelector('.container h1')
//     const data = new Date();


//     function getDiaDaSemanaTexto(diaSemana) {
//         { // arry começa com chaves
//         const diaSemanaTexto = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']
//         return diaSemanaTexto[diaSemana]
//         }
//     }

    
//     function zeroAesquerda(diaNumero) {
//         return diaNumero <= 10 ? `0${diaNumero}` : diaNumero // posso fazer ela ao contrario também
//     }
    


//     function getMesDoAno (MesAno) {{
//         const mesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
//         return mesDoAno[MesAno];
//         }
//     }
    
//     function criaData(data) {

//         const diaSemana = data.getDay();
//         const diaSemanaTexto = getDiaDaSemanaTexto(diaSemana);

//         const diaNumero = zeroAesquerda(data.getDate());

//         const anoMes = data.getMonth();
//         const mesDoAno = getMesDoAno(anoMes);

//         const ano = data.getFullYear();

//         const horaAtual = zeroAesquerda(data.getHours());

//         const minutoAtual = zeroAesquerda(data.getMinutes());
    
//         const segundosAtuais = zeroAesquerda(data.getSeconds());

//         return `Hoje é: ${diaSemanaTexto}, ${diaNumero} de ${mesDoAno} de ${ano}, às ${horaAtual}:${minutoAtual}:${segundosAtuais}`
//     }
    
    
    
    
    
    
//     resultado.innerHTML = criaData(data);
    
    
// };
    
    meuEscopo();

function meuEscopo () {
    const resultado = document.querySelector('.container h1')
    const data = new Date();
    resultado.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'long', timeStyle: 'medium'});

}
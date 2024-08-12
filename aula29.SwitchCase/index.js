const data = new Date('1999-12-10 00:00:00'); // data selecionada
const diaSemana = data.getDay();// aqui eu estou pegando o dia da semana 
// let diaSemanaTexto;

// if (diaSemana === 0) { 
//     diaSemanaTexto = `Domingo`; // aqui eu estou definindo o que a let seria
// } else if (diaSemana === 1) {
//     diaSemanaTexto = `Segunda-Feira`;
// } else if (diaSemana === 2) {
//    diaSemanaTexto = `Terça-Feira`
// } else if (diaSemana === 3) {
//    diaSemanaTexto = `Quarta-Feira`
// } else if (diaSemana === 4) {
//     diaSemanaTexto = `Quinta-Feira`
// } else if (diaSemana === 5) {
//     diaSemanaTexto = `Sexta-Feira`
// } else if (diaSemana === 6) {
//     diaSemanaTexto = `Sábado`
// }

// switch (diaSemana) { // if
//     case 0: // se for igual a 0
//         diaSemanaTexto = 'Domingo';
//         break; // pular
//         case 1: // else if
//             diaSemanaTexto ='Segunda';
//             break;
//             case 2: // else if
//                 diaSemanaTexto = 'Terça';
//                 break;
//                 case 3: // else if
//                     diaSemanaTexto ='Quarta';
//                     break;
//                     case 4: // else if
//                         diaSemanaTexto ='Quinta';
//                         break
//                         case 5: // else if
//                             diaSemanaTexto = 'Sexta';
//                             break;
//                             case 6:  // else if 
//                             diaSemanaTexto = 'Sábado';
//                             break;
//                             default: // else
//                                 diaSemanaTexto = '' 
//                                 break;


// }

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) { // if
        case 0: // se for igual a 0
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto; // pular
            case 1: // else if
                diaSemanaTexto ='Segunda';
                return diaSemanaTexto;
                case 2: // else if
                    diaSemanaTexto = 'Terça';
                    return diaSemanaTexto;
                    case 3: // else if
                        diaSemanaTexto ='Quarta';
                        return diaSemanaTexto;
                        case 4: // else if
                            diaSemanaTexto ='Quinta';
                            return diaSemanaTexto
                            case 5: // else if
                                diaSemanaTexto = 'Sexta';
                                return diaSemanaTexto;
                                case 6:  // else if 
                                diaSemanaTexto = 'Sábado';
                                return diaSemanaTexto;
                                default: // else
                                    diaSemanaTexto = '' 
                                    return diaSemanaTexto;
    
    
    }
}
const diaSemanaTexto = getDiaSemanaTexto(diaSemana); // numero
console.log(diaSemana,diaSemanaTexto);
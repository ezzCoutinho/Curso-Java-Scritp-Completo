function meuEscopo () {
    const resultado = document.querySelector('.container h1')
    const data = new Date();

    const diaSemana = data.getDay();

    function getDiaDaSemanaTexto(diaSemana) {
        let diaSemanaTexto;

        switch (diaSemana) {
            case 0:
                diaSemanaTexto = 'Domingo';
                return diaSemanaTexto;
                case 1:
                    diaSemanaTexto = 'Segunda-Feira';
                    return diaSemanaTexto;
                    case 2:
                        diaSemanaTexto  = 'Terça-Feira';
                        return diaSemanaTexto;
                        case 3:
                            diaSemanaTexto = 'Quarta-Feira';
                            return diaSemanaTexto;
                            case 4:
                                    diaSemanaTexto = 'Quinta-Feira';
                                    return diaSemanaTexto;
                                    case 5:
                                        diaSemanaTexto = 'Sexta-Feira';
                                        return diaSemanaTexto;
                                        case 6: 
                                        diaSemanaTexto ='Sábado';
                                        return diaSemanaTexto;
                                        default:
                                            diaSemanaTexto = ''
                                            return diaSemanaTexto
        }
    }

    
    function zeroAesquerda(diaNumero) {
        return diaNumero >= 10 ? diaNumero : `0${diaNumero}`
    }
    

    const anoMes = data.getMonth();

    function getMesDoAno (MesAno) {
        let mesDoAno;

        switch (MesAno){
            case 0:
                mesDoAno = 'Janeiro';
                return mesDoAno;
                case 1:
                    mesDoAno = 'Fevereiro';
                    return mesDoAno;
                    case 2:
                        mesDoAno = 'Março';
                        return mesDoAno;
                        case 3:
                            mesDoAno = 'Abril';
                            return mesDoAno;
                            case 4:
                                mesDoAno = 'Maio';
                                return mesDoAno;
                                case 5:
                                    mesDoAno = 'Junho';
                                    return mesDoAno;
                                    case 6:
                                        mesDoAno = 'Julho';
                                        return mesDoAno;
                                        case 7:
                                            mesDoAno = 'Agosto';
                                            return mesDoAno;
                                            case 8:
                                                mesDoAno = 'Setembro';
                                                return mesDoAno;
                                                case 9:
                                                    mesDoAno = 'Outubro';
                                                    return mesDoAno;
                                                    case 10:
                                                        mesDoAno = 'Novembro';
                                                        return mesDoAno;
                                                        case 11:
                                                            mesDoAno = 'Dezembro';
                                                            return mesDoAno;
                                                            default:
                                                                mesDoAno = '';
                                                                return mesDoAno;
        }
    }
    
    
    
    const diaSemanaTexto = getDiaDaSemanaTexto(diaSemana);
    
    const diaNumero = zeroAesquerda(data.getDate());

    const mesDoAno = getMesDoAno(anoMes);

    const ano = data.getFullYear();
    
    const horaAtual = zeroAesquerda(data.getHours());

    const minutoAtual = zeroAesquerda(data.getMinutes());

    const segundosAtuais = zeroAesquerda(data.getSeconds());


    resultado.innerHTML = `Hoje é: ${diaSemanaTexto}, ${diaNumero} de ${mesDoAno} de ${ano}, às ${horaAtual}:${minutoAtual}:${segundosAtuais}`
}

meuEscopo();
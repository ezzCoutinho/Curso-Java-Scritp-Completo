// (condição) ? 'verdadeiro'  : 'falso'
// Ela substitui o if verdadeiro e o else falso
const pontuacaoUsuario = 735;

// if (pontuacaoUsuario >=1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário NÃO-VIP');
// }


const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário NÃO-VIP';

const corUsuario = 'Blue'
const corPadrao = corUsuario || 'Pink'; // curto sircuito OR
console.log(nivelUsuario, corPadrao);
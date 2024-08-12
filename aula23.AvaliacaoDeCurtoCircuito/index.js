/*
&&- > false && true -> false "quando for falso retorna o valor falso"
|| -> true && false -> vai retornar "O valor verdadeiro"

FALSY
false // valor literal 
0
'' "" ``
null / undefined
NaN
*/
//                                  aqui para
//         false                    true           
console.log( 0 || false || false || 'Luiz Otávio' || true );// irá retornar sempre a primeira expressão verdadeira.

const corUsuario = 'black'
const corPadrao = corUsuario || 'red';

console.log(corPadrao); // retorna o primeiro valor true 




//                     aqui para
//           true       false
console.log('Matheus' && 0 && 'Maria'); // retorna o primeiro valor false = 0


function falaOi(){
    return 'Oi'
};

const vaiExecutar = 'João';

// console.log(vaiExecutar && falaOi());

console.log(false || false || false || NaN);

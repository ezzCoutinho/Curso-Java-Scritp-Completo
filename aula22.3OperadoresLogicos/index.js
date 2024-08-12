 /*
 Operadores Lógicos
 && -> AND -> E -> Ela tem que ser em true em toda expressao
 || -> OR  -> OU -> Se ela tiver um true, ja torna ela true
 !  -> NOT -> NÃO - > Ela nega um true e um falso
 */

 const expressaoAnd = true && true && true && true; 

 const usuario = 'Luiz';
 const senha = '123456';
//                        true       and      true 
 const vaiLogar = usuario === 'Luiz' && senha === '123456'; // estou usando AND = true 
 console.log(vaiLogar);

 const expressaoOr = false || false || true || false;

 const usuarioOr = 'Matheus';
 const senhaOr = '123456';
//                            true          or         false
 const vaiLogarOr = usuarioOr === 'Matheus' || senhaOr === '123456789'; // basta apenas um se igual que da true

 console.log(vaiLogarOr);


 console.log(!!!!true); // negação !true = false, !false = true
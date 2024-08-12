let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A 

[varA, varB, varC] = [varB, varC, varA]; // interessante

console.log(varA, varB, varC);


let VarA = varA; // Gambiarra

let resultadoA;

resultadoA = varB;

varA = resultadoA;
/////
let resultadoB;

resultadoB= varC;

varB = resultadoB;
/////
let resultadoC;

resultadoC = VarA; // a Gambiarra está aqui 

varC = resultadoC;



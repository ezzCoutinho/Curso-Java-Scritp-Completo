const mult1 = (n1, n2) => n1 * n2; // arrow fuction resumida

// console.log(mult1(8,8));

const mult = (n1, n2) => { // arrow function é mais simples e melhor de usar
    const resultado = n1 * n2;
    return resultado;
}

// console.log(mult(9,9));


const raiz = function (n) { // fuction anonima
    const resultado = n ** 0.5;
    return resultado
}

// console.log(raiz(9));


function assumir(num1 = 1, num2 = 1) { // pré definir uma fuction em caso de não ser definida fora do escopo
    const resultado = num1 + num2;
    return resultado;
}

const resultado1 = assumir(); // conferindo a pré definição da função
// console.log(resultado1);


function soma(num1,num2){  // aqui como a conta e com dois numeros serao dois representante 
    const resultado = num1 + num2 ; // coloco eles aqui 
    return resultado; // return ja retorna no console, pois eu defini a soma e seus representante la mesmo
    console.log('Hello World'); // oq estiver abaixo do return não sera processado pela Engine do Java
}

const resultado = soma() // essa variavel não tem nada a ver com a de dentro
// console.log(soma('Matheus ', 'Lopes')); // posso concatenar tbm
// console.log(soma(99,11)); // definir a function no console log
// console.log(soma(1999, 1)); // executando em log 
// console.log(soma(45, 55));


function saudacao(nome) {
    return `Bom dia ${nome}!`; // maneira correta do return 
} 

const var1 = saudacao('Luiz');
// console.log(var1);

function saud(nome) { // cuidado podem haver conflitos
    // console.log(`Bom dia ${nome}`)
    return 123456;
}

const variavel1 = saud('Luiz');// Luiz foi executada aqui
// console.log(variavel1); // e o return aqui, return especificado voltou em variavel {123456
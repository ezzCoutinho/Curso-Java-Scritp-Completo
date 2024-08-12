function* geradora1() {
    // Código qualquer ...
    yield `Valor 1`;
    // Código qualquer ...
    yield `Valor 2`;
    // Código qualquer ...
    yield `Valor 3`;
}
// console.log(g1.next());
// console.log(g1.next().value);

// const g1 = geradora1();
// for (let valor of g1) {
//     console.log(valor);
// }

function* geradora2() {
    let i = 0; // base, começa do 0
    while (true) { // condição infinita
        yield i; // i valor do yield
        i++; // incrementação.
    }
}
const g2 = geradora2()
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value); // até o 7

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}
// delegando a 3 para a 4
function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();

for(let valor of g4){
    // console.log(valor);
}


function* geradora5() {
    yield function(){
        console.log('Vim do y1');
    };
    // return quebra a function geranator
    yield function() {
        console.log('Quebrei a sequencia do yield');
    }

    yield function(){
        console.log('Vim do y2');
    };
}

const g5 = geradora5();
// pegando o valor do yield
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;

func1();
func2();
func3();
// gerando numeros aleatorios
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num)
}
// function com callback como funcao em ordem
function f1(callback) {
    setTimeout(function () {
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function (){
        console.log('f2');
        if (callback) callback();
    }, rand())
}

function f3 (callback) {
    setTimeout(function(){
        console.log('f3');
        if (callback) callback();
    }, rand());
}
//executando callback em ordem, callbackHELL
// f1(function () {
//     f2(function () {
//         f3 (function () {
//             console.log('Hello World');
//         });
//     });
// });


// callbackHELL só que melhor 
f1(f1Callback); // executando a função


function f1Callback () {
    f2(f2Callback);
}

function f2Callback () {
    f3(f3CallBack);
}

function f3CallBack () {
    console.log(`Olá mundo!`);
}
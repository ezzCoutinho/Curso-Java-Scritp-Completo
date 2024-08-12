const numero = Number(window.prompt('Digite algum número: ')); // Lembre-se toda saida de um prompt é em string

// document.getElementById('numero-titulo');
const numeroTitulo = document.getElementById('numero-titulo');

// document.getElementById('texto');
const texto = document.getElementById('texto');
numeroTitulo.innerHTML = ''; // aqui eu estou removendo o placeholder do HTML

texto.innerHTML = ''; // aqui eu estou removendo o placeholder do HTML

numeroTitulo.innerHTML += `<p>Seu número digitado foi: ${numero}.</p>`;

texto.innerHTML += `<p>A raiz quadrada do seu número é: ${Math.pow(numero, 0.5)}. </p>`;

texto.innerHTML += `<p>O ${numero} é um inteiro número: ${Number.isInteger(numero)}.</p>`;

texto.innerHTML += `<p>É um Not a Number:
${Number.isNaN(numero)}. </p>`;

texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}. </p>`;

texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)} .</p>`;

let decimal = numero.toFixed(2) // tive que criar uma variavel para formatar em casas decimais, na linha do codigo não estava indo  ATENTIOOON

texto.innerHTML += `<p>Com duas casas decimais: ${decimal}. </p>`;
function meuEscopo() {
    const form = document.querySelector('.form'); // seletor de class
    const resultado = document.querySelector('.resultado');


    const pessoas = [];

    form.addEventListener('submit', function recebeEventoForm(evento){ // form junto ao espião
        evento.preventDefault(); // parametro junto ao cancelador
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value, sobrenome: sobrenome.value, peso: peso.value, altura:altura.value
        }); // assim que coloca um objeto dentro de array 


       resultado.innerHTML += `Seu nome é ${nome.value} ${sobrenome.value}, você pesa: ${peso.value}, sua altura é de ${altura.value} <br/>`; // AQUI VOCÊ ADICIONA NA PAGINA

       console.log(pessoas);
    
    });
};



meuEscopo();





//   function meuEscopo () {
//     const form = document.querySelector('#forma') // aqui estou selecionando um form html em uma id
   
    // let contador = 1;
    // form.addEventListener('submit', function recebeEventoForm (evento){ // estou adicionando um eventoescutado e criando uma fuction 
    // evento.preventDefault(); // aqui eu estou chamando o parâmetro e definindo que ele não ira enviar o formulario.
    // console.log(`Form não foi enviado ${contador}`);// contando as vezes que não foi enviado o form
    // contador++; // incrementando
    // })



//  form.onsubmit= function (evento){ // estou recebendo um evento do navegador 
//     evento.preventDefault(); // cancela um evento Enviar e impede links
//     alert('Flamengo')

//  };


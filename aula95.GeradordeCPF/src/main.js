import GeraCPF from './modules/GeraCPF';
import './assets/css/styles.css';

(function () {

    const gera = new GeraCPF();

    const container = document.querySelector('.container');
    const cpfGerado = document.createElement('div');
    cpfGerado.classList.add('.cpf-gerado');
    cpfGerado.style.color = 'green';
    cpfGerado.style.fontSize = '2em';
    cpfGerado.style.textAlign = 'center';
    cpfGerado.style.fontWeight = 'bold';
    cpfGerado.style.marginBottom = '40px';
    cpfGerado.style.letterSpacing = '6px';
    container.appendChild(cpfGerado);

    cpfGerado.innerHTML = gera.geraNovoCpf();

})();
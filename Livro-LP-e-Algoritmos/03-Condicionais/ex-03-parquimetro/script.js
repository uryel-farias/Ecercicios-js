const resultado = document.querySelector('#resultado');
const botao = document.querySelector('#botao');


botao.addEventListener("click", () => {

    const velocidadePermitida = Number(document.querySelector('#velocidade_permitida').value);
    console.log(velocidadePermitida);
    const velocidadeCondutor = Number(document.querySelector('#velocidade_condutor').value);
    console.log(velocidadeCondutor);

    if (velocidadeCondutor <= velocidadePermitida) {
        resultado.innerText = 'Sem multa';
    } else if (velocidadeCondutor > velocidadePermitida &&
        velocidadeCondutor <= velocidadePermitida * 1.2) {
        resultado.innerText = 'Multa leve';
    } else {
        resultado.innerText = 'Multa grave';
    }


})
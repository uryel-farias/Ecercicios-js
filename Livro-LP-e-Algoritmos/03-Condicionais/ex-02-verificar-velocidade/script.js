const resultado = document.querySelector('#resultado')
const botao = document.querySelector('#botao');

function LimpaCampo() {
    let campo = document.querySelector('#velocidade_permitida').value='';
    return campo;
}

botao.addEventListener("click", () => {

    const velocidadePermitida = Number(document.querySelector('#velocidade_permitida').value);
    const velocidadeCondutor = Number(document.querySelector('#velocidade_condutor').value);

    if (velocidadeCondutor <= velocidadePermitida) {
        resultado.innerText = 'Sem multa';
    } else if (velocidadeCondutor > velocidadePermitida &&
        velocidadeCondutor <= velocidadePermitida * 1.2
     ) {
        resultado.innerText = 'Multa Leve';
    } else {
        resultado.innerText = 'Multa Grave';
    }


})
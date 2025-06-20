const resultado = document.querySelector('#resultado').value;
const botao = document.querySelector('#botao');

function LimpaCampo() {
    let campo = document.querySelector('#velocidade_permitida').value='';
    return campo;
}

botao.addEventListener("click", () => {

    const velocidadePermitida = Number(document.querySelector('#velocidade_permitida').value);
    console.log(velocidadePermitida);
    const velocidadeCondutor = Number(document.querySelector('#velocidade_condutor').value);
    console.log(velocidadeCondutor);

    if (velocidadeCondutor <= velocidadePermitida) {
        resultado.value = 'Sem multa';
    } else if (velocidadeCondutor > velocidadePermitida &&
        velocidadeCondutor <= velocidadePermitida * 1.2
     ) {
        resultado.value = 'Multa Leve';
    } else {
        resultado.value = 'Multa Grave';
    }


})
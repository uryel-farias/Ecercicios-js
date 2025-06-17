const resultado = document.querySelector('#resultado')
const botao = document.querySelector('#botao');

function LimpaCampo() {
    let campo = document.querySelector('#numero').value='';
    return campo;
}

botao.addEventListener("click", () => {

    let numero = Number(document.querySelector('#numero').value);
    
    if ( numero === 0 ) {
        resultado.innerText = (`${numero} é par.`);
        LimpaCampo();
    } else if ( numero % 2 === 0 ) {
        resultado.innerText = (`${numero} é par.`);
        LimpaCampo();
    } else {
        resultado.innerText = (`${numero} é ímpar.`);
        LimpaCampo();
    }

})
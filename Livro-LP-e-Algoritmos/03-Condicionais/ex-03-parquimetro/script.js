const resultado1 = document.querySelector('#resultado1');
const resultado2 = document.querySelector('#resultado2');
const botao = document.querySelector('#botao');

function limpaCampo() {
    const resultado1 = document.querySelector('#resultado1');
    const resultado2 = document.querySelector('#resultado2');
    resultado1 = ''
    resultado2 = ''
    return
}


botao.addEventListener("click", () => {
    const valor = Number(document.querySelector('#valor').value);

    if (valor < 1 ) {
        resultado1.innerText = 'Valor insuficiente.'
        resultado2.innerText = '';

    } else if (valor >= 1 && valor < 1.75) {
        resultado1.innerText = 'Tempo: 30 min.'
        resultado2.innerText = `Troco R$: ${(valor - 1).toFixed(2)}`
   } else if (valor >= 1.75 && valor < 3) {
        resultado1.innerText = 'Tempo: 60 min.'
        resultado2.innerText = `Troco R$: ${(valor - 1.75).toFixed(2)}`
   } else {
        resultado1.innerText = 'Tempo: 120 min.'
        resultado2.innerText = `Troco R$: ${(valor - 3).toFixed(2)}`
   }

    console.log(valor);

})
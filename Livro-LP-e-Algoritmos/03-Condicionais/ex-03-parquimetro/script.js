const resultado1 = document.querySelector('#resultado1');
const resultado2 = document.querySelector('#resultado2');
const botao = document.querySelector('#botao');


botao.addEventListener("click", () => {
    const valor = Number(document.querySelector('#valor').value);

    if (valor < 1 ) {
        resultado1.innerText = 'Valor insuficiente.'
    } else if (valor >= 1 && valor <= 1.75) {
        resultado1.innerText = 'Tempo: 30 min.'
        resultado2.innerText = `Troco R$: ${(valor - 1).toFixed(2)}`
   }

    console.log(valor);

})
const resposta = document.querySelector('#valor-a-pagar');
;
const botao = document.querySelector('#botao');

botao.addEventListener("click", () => {

    const valorPor15Minutos = Number(document.querySelector('#descricao-valor').value);
    const tempoDeUso = Number(document.querySelector('#tempo-de-uso').value);

    const tempoDeUsoAtualizado = Math.ceil(tempoDeUso / 15);
    const valorFinal = tempoDeUsoAtualizado * valorPor15Minutos;
 
    resposta.innerText = (`Valor a Pagar R$: ${valorFinal.toFixed(2)}.`);

})
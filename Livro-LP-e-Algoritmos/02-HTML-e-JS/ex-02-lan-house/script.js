const resposta = document.querySelector('#valor-a-pagar');
;
const botao = document.querySelector('#botao');

botao.addEventListener("click", () => {

    const valorPor15Minutos = document.querySelector('#descricao-valor').value;
    const tempoDeUso = Number(document.querySelector('#valor-produto').value);

    resposta.innerText = (`Promoção de ${medicamento}.`);

})
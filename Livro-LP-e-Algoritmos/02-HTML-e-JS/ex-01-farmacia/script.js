const resposta1 = document.querySelector('#medicamento');
const resposta2 = document.querySelector('#valor-desconto');
const botao = document.querySelector('#botao');

botao.addEventListener("click", () => {

    const medicamento = document.querySelector('#descricao-produto').value;
    const preco = document.querySelector('#valor-produto').value;

    resposta1.innerText = (`Promoção de ${medicamento}.`);
    resposta2.innerText = (`Leve 2 por apenas R$: ${preco}.`);

    console.log(resposta1.innerText);
    console.log(resposta2.innerText);
})
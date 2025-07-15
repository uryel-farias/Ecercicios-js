const botao  = document.querySelector('#botao');


botao.addEventListener("click", () => {
    const fruta = document.querySelector('#fruta').value;
    const quantidade = Number(document.querySelector('#numero').value);
    let resultado = document.querySelector('#resultado');

    console.log(fruta);
    console.log(quantidade);

    resultado.innerText = `${fruta}`;
})


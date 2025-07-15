const botao  = document.querySelector('#botao');


botao.addEventListener("click", () => {
    const fruta = document.querySelector('#fruta').value;
    const quantidade = Number(document.querySelector('#numero').value);
    let resultado = document.querySelector('#resultado');
    let textoResultado = '';

    for(let i = 1; i <= quantidade; i++){
        if (i === quantidade) {
            textoResultado = textoResultado + `${fruta}`;
        } else {
            textoResultado = textoResultado + `${fruta} * `;
        }
    }

    console.log(fruta);
    console.log(quantidade);

    resultado.innerText = `${textoResultado}`;
})


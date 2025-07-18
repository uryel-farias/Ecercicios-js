const { createElement } = require("react");

const botao  = document.querySelector('#botao');


botao.addEventListener("click", () => {

    const chincilas = Number(document.querySelector("#chinchila").value);
    const anos = Number(document.querySelector("#ano").value);
    let resposta = document.querySelector(".resultados");
    let contador = 1;

    do {
        const elemento = document.createElement("p");
        elemento.setAttribute
        contador += 1;

    } while (contador <= anos);


    //resposta.innerHTML = `exemplo${anos}`
    console.log(chincilas);
    console.log(anos);

})


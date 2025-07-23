const botao  = document.querySelector('#botao');


botao.addEventListener("click", () => {

    let resposta = document.querySelector(".resultados");
    resposta.textContent = '';
    
    let chincilas = Number(document.querySelector("#chinchila").value);
    const anos = Number(document.querySelector("#ano").value);

    for (let contador = 1; contador <= anos; contador++ ) {
        const item = document.createElement("p");
        item.textContent = `${contador}º Ano: ${chincilas =  chincilas * 3} Chinchilas.`;

        resposta.appendChild(item);
    }

    console.log(anos);

})


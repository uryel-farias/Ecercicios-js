const botao  = document.querySelector('#botao');


botao.addEventListener("click", () => {

    const chincilas = Number(document.querySelector("#chinchila").value);
    const anos = Number(document.querySelector("#ano").value);
    let resposta = document.querySelector('#resultado').value;
    let contador = 1
    do {
        
        contador += 1;
    } while (anos <= contador)

    console.log(chincilas);
    console.log(anos);

})


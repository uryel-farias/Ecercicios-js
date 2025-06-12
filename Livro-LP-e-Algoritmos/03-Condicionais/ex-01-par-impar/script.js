const resultado = document.querySelector('#resultado')
const botao = document.querySelector('#botao');

botao.addEventListener("click", () => {

    let numero = Number(document.querySelector('#numero').value);
    
    if ( numero === 0 ) {
        resultado.innerText = (`${numero} é par.`);
    } else if ( numero % 2 === 0 ) {
        resultado.innerText = (`${numero} é par.`);
    } else {
        resultado.innerText = (`${numero} é ímpar.`);
    }
   
    console.log(resposta1.innerText);
})
const botao  = document.querySelector('#botao');


botao.addEventListener("click", () => {
    const numero = Number(document.querySelector('#numero').value);
    let acumulador = 0;
    let resto;

    for (let index = 1; index < numero; index++) {
        //console.log(`Index = ${index}`)
        resto = numero % index;
        //console.log(`resto = ${resto}`)

        if(resto === 0) {
            acumulador += index;
        }

        
        //console.log(`---------------------------`)
        
    }


    
    console.log(`*******************************`)
    if ( acumulador === numero) {
        console.log(`O número ${numero} é Perfeito!`)
    }
    console.log(`Acumulador = ${acumulador}`)
    console.log(`------------FIM----------------`)





})


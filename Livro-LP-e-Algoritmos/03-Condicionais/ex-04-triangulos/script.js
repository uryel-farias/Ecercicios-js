const resultado1 = document.querySelector('#resultado1');
const resultado2 = document.querySelector('#resultado2');
const botao = document.querySelector('#botao');

let triangulo = true;

botao.addEventListener('click', ()=>{

    const ladoA = Number(document.querySelector('#ladoA').value);
    const ladoB = Number(document.querySelector('#ladoB').value);
    const ladoC = Number(document.querySelector('#ladoC').value);

    console.log(ladoA,ladoB,ladoC)

    if (ladoA > (ladoB + ladoC)) {
        triangulo = false;
    } else if (ladoB > (ladoA + ladoC)) {
        triangulo = false;   
    } else if ( ladoC > (ladoA + ladoB)) {
        triangulo = false;  
    } else {
        triangulo = true;
    }

        console.log(triangulo)

    if (triangulo) {
        const equilatero = trianguloEquilatero( ladoA, ladoB, ladoC ); 
        const isosceles = trianguloIsosceles( ladoA, ladoB, ladoC ); 
        const escaleno = trianguloEscaleno( ladoA, ladoB, ladoC ); 

    }

})
const resultado1 = document.querySelector('#resultado1');
const resultado2 = document.querySelector('#resultado2');
const botao = document.querySelector('#botao');

let equilatero, isosceles, escaleno;

let tipoEscaleno = false, 
    tipoIsosceles = false,
    tipoEquilatero = false;

let triangulo = true;

function trianguloEquilatero (ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC) {
        tipoEquilatero = true;
        if (ladoB === ladoC){
            tipoEquilatero = true;
        }
    } else {
        tipoEquilatero = false;
    }
    return tipoEquilatero;
}

function trianguloIsosceles (ladoA, ladoB, ladoC) {
    if (ladoA === ladoB || ladoB === ladoC) {
            tipoIsosceles = true;
        } else if (ladoA === ladoC) {
            tipoIsosceles = true;
    } else {
        tipoIsosceles = false;
    }
    return tipoIsosceles;
}

function trianguloEscaleno (ladoA, ladoB, ladoC) {
    if (ladoA != ladoB && ladoB != ladoC) {
        if (ladoA != ladoC) {
            if (ladoB != ladoC) {
                tipoEscaleno = true;
            }
        }

    } else {
        tipoEscaleno = false;
    }
    return tipoEscaleno;
}


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
        equilatero = trianguloEquilatero( ladoA, ladoB, ladoC ); 
        isosceles = trianguloIsosceles( ladoA, ladoB, ladoC ); 
        escaleno = trianguloEscaleno( ladoA, ladoB, ladoC ); 

        if (equilatero) {
        resultado1.innerText = 'Lados podem formar um triângulo.';
        resultado2.innerText = `Tipo: Equilatero`;
    } else {
        if (isosceles) {
            resultado1.innerText = 'Lados podem formar um triângulo.';
            resultado2.innerText = `Tipo: Isosceles`;
        } else {
            resultado1.innerText = 'Lados podem formar um triângulo.';
            resultado2.innerText = `Tipo: Escaleno`;
        }
    }

    } else {
        resultado1.innerText = 'Lados não podem formar um triângulo.';
        resultado2.innerText = '';
    }


    console.log(`Lado A = ${ladoA}`);
    console.log(`Lado B = ${ladoB}`);
    console.log(`Lado C = ${ladoC}`);
    console.log(`Tipo de triângulo: Equilatero: ${equilatero} | Isosceles: ${isosceles} | Escaleno: ${escaleno}`);

    
})
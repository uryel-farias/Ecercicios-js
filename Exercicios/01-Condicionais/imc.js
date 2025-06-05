var readlineSync = require('readline-sync');


let peso = parseFloat(readlineSync.question('Digite seu peso: '));
let altura = parseFloat(readlineSync.question('Digite sua altura em centimetros: '));

let imc = peso / (altura/100 * altura/100);

if (imc < 18.5) {
    console.log(`O valor do seu IMC é: ${imc.toFixed(2)}`);
    console.log('Abaixo do peso.');
} else if ( imc >= 18.5 && imc <= 24.9) {
    console.log(`O valor do seu IMC é: ${imc.toFixed(2)}`);
    console.log('Peso normal.');
} else if (imc >= 25 && imc <= 29.9) {
    console.log(`O valor do seu IMC é: ${imc.toFixed(2)}`);
    console.log('Sobrepeso.');
} else {
    console.log(`O valor do seu IMC é: ${imc.toFixed(2)}`);
    console.log('Obesidade.');
}


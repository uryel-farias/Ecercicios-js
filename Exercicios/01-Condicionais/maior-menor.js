var readlineSync = require('readline-sync');
let maior, menor;

console.log("O maior entre 3 numeros.")

let numero1 = parseInt(readlineSync.question('Digite um numero: '));
let numero2 = parseInt(readlineSync.question('Digite um numero: '));
let numero3 = parseInt(readlineSync.question('Digite um numero: '));

if ( numero1 > numero2) {
    maior = numero1;
    menor = numero2;
} else {
    maior = numero2;
    menor = numero1;
}

if (numero3 > maior) {
    maior = numero3;
} else if (numero3 < menor) {
    menor = numero3;
}

if (numero2 < menor){
    menor = numero2;
}
//onsole.log(numero1)
//console.log(typeof(numero1))

console.log(`O maior número foi: ${maior}`);
console.log(`O menor número foi: ${menor}`);


var readlineSync = require('readline-sync');
let numeros = []
let maior, numero = 0;

console.log("O maior entre 3 numeros.")

for ( let index = 3 ; index > 0 ; index--){
    numeros.push(parseInt(readlineSync.question('Digite um numero: ')));

}


console.log(numeros)


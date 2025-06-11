var readlineSync = require('readline-sync');

let nota1 = parseFloat(readlineSync.question('Digite a primeira nota: '));
let nota2 = parseFloat(readlineSync.question('Digite a segunda nota: '));
let nota3 = parseFloat(readlineSync.question('Digite a terceira nota: '));

let media = (nota1 + nota2 + nota3) / 3 ;

if (media >= 7) {
    console.log("Aprovado")
} else if () {

} else {

}
var readlineSync = require('readline-sync');
const entrada = parseInt(readlineSync.question('Digite sua idade: '));

if (entrada < 18) {
    console.log('Você ainda não pode tirar a habilitação.');
} else if ( entrada === 18) {   
    console.log('Você já pode tirar a habilitação este ano!');
} else {
    console.log('Você já pode tirar a habilitação.');
}
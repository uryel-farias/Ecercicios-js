var readlineSync = require('readline-sync');

const usuario = "uryel";
const senha = 321;


let user = readlineSync.question('Digite o seu usuario: ');
let pass = parseInt(readlineSync.question('Digite sua senha númerica: '));
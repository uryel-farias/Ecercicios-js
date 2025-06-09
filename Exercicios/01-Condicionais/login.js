var readlineSync = require('readline-sync');

const usuario = "uryel";
const senha = 321;


let user = readlineSync.question('Digite o seu usuario: ');
let pass = parseInt(readlineSync.question('Digite sua senha númerica: '));

if (user === usuario && pass === senha) {
    console.log("Usuário correto.")
} else {
    console.log("uuario ou senha incorreto.")
}
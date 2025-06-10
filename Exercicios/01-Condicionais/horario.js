var readlineSync = require('readline-sync');

let hora = readlineSync.question('Digite o horário: ');
let horaConvertida = hora - 12;

if(hora === 0) {
    console.log(`A hora e 12 hrs da noite.`)
} else if (hora > 0 && hora <= 12) {
    console.log(`A hora é ${hora}:00 hrs da manha.`)
} else if (hora > 12 && hora <= 17) {
    console.log(`A hora é ${horaConvertida}:00 hrs da tarde.`)
} else if (hora >= 18 && hora <= 22) {
    console.log(`A hora é ${horaConvertida}:00 hrs da noite.`)
} else if (hora > 23) {
    console.log("Digite um horario valido.")
} else {
    console.log("Digite um horario valido.")
}
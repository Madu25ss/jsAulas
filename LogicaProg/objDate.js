//Objeto Date
const data = new Date();
console.log(data.toString());

//const dataAnterior = new Date('2024-12-18 14:30:00');
//console.log(data.toString(dataAnterior));

const diaSemana = data.getDay(); //métodos de data: 
/*get.
date, month, fullYear, Hours, Minutes, Seconds, Milliseconds, day...
*/
let outputData;

if (diaSemana === 0) {
    outputData = 'Domingo';
} else if (diaSemana === 1) {
    outputData = 'Segunda-Feira';
} else if (diaSemana === 2) {
    outputData = 'Terça-Feira';
} else if (diaSemana === 3) {
    outputData = 'Quarta-Feira';
} else if (diaSemana === 4) {
    outputData = 'Quinta-Feira';
} else if (diaSemana === 5) {
    outputData = 'Sexta-Feira';
} else {
    outputData = 'Sábado';
}

console.log(`Dia da semana: ${outputData}.`);

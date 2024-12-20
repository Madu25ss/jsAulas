//sintaxe if else 
let x = 0;
let y = x

if (x >=10) {
    console.log('x >= que 10');
} else {
    console.log('x menor que 10');
};

if (x >=10) {
    console.log('x >= que 10');
} else if (x > 0) {
    console.log('x menor que 10, maior que 0');
} else {
    console.log('x = 0');
};

if (x === y) {
    console.log('x e y iguais')
} else {
    console.log('não iguais');
};

//Operador ternário ? : -> condição? verdadeiro: falso
console.log(x>10? 'x maior que 10': 'x menor ou igual a 10');

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

//Swith Case

switch (diaSemana) {
    case 0:
        outDataSwitch = 'Domingo';
        break;
    case 1:
        outDataSwitch = 'Segunda-Feira';
        break;
    case 2:
        outDataSwitch = 'Terça-Feira';
        break;
    case 3:
        outDataSwitch = 'Quarta-Feira';
        break;
    case 4:
        outDataSwitch = 'Quinta-Feira';
        break;
    case 5:
        outDataSwitch = 'Sexta-Feira';
        break;
    case 6:
        outDataSwitch = 'Sábado';
        break;
    default:
        break;
};

console.log(`Dia da semana: ${outDataSwitch}.`);

//exerc object date, if e switch -> fazer 

//


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


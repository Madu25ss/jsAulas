/*
const container = document.querySelector('.container');
const mainDiv = document.querySelector('.timer');

container.appendChild(mainDiv);
*/

let dataZero = new Date();
dataZero.setHours(0,0,0,0);


//btn iniciar
//problema: retorno final da dataAtualizada depois de 4 segundo -> 04:00:04, adicionando horas? --> arrumar!
function addSeg(data, segundos) {
    data.setSeconds(data.getSeconds() + segundos);// dando erro 
    return data;
}

let dataAtualizada;
const timer = setInterval(function() {
    dataAtualizada = addSeg(dataAtualizada, 1);
    console.log(dataAtualizada.toLocaleTimeString('pt-BR', {
        hour12: false
    }));
}, 1000);


//btn parar
setTimeout(function() {
    clearInterval(timer);
    console.log('fim teste');
    dataAtualizada = new Date(dataZero.getTime());
    console.log(dataAtualizada.toLocaleTimeString('pt-BR', {
        hour12: false
    }));
}, 5000);
//setTimeOut-> addListeningEvent('Click', setTimeOut(...) )

//btn reset
//como fazer a dataAtualizada voltar a ser DataZero? 
//addListeningEvent('Click', dataAtualizada = dataZero)
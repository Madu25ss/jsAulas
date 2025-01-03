//métodos constrole de time: setInterval, setTimeout
//mostra hora atual 
function horaAtual() {
    let data = new Date();

    //ToLocaleTimeString: retorna uma string com o horário de acordo com o local. -> pt-br
    //hour12: false -> hour12 bollean que determina se o horário vai ser mostrado no formato de 12 horas (hour12: true -> 10:06:11 AM) ou no formato de 24 horas (hour12: false -> 10:06:11)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

/*
function funcaoIntervalo() {
    console.log(horaAtual());
}

//setInterval(funcaoX, milisegundoY): intervalo(milisegundoY) em que a função(funcaoX) é executada .
setInterval(funcaoIntervalo, 1000);
*///OU

//setInterval executa várias vezes -> 1000 -> "atualiza" de 1 em 1 segundo
const timer = setInterval(function funcaoIntervalo() {
    console.log(horaAtual());
}, 1000);

//setTimeout: para a execução do timer -> clearInterval(timer) -> em 1min 
/*
setTimeout(function timeout(){
    clearInterval(timer);
}, 10000);
*/

//após 5seg para a execução do timer e console.log('timeout').
setTimeout(function() {
    clearInterval(timer);
    console.log('timeout');
}, 5000);
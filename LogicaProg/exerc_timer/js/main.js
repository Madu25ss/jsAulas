function escopoPag() {
    const container = document.querySelector('.container');
    const divTimer = document.querySelector('.timer');

    const btnIniciar = document.querySelector('.btnIniciar');
    const btnPausar = document.querySelector('.btnPausar');
    const btnZerar = document.querySelector('.btnZerar');

    let data = new Date();
        data.setHours(0,0,0,0);
    
        
    function TimerZerado(x) {
        return x.toLocaleTimeString('pt-BR', {
            hour12: false
        });
    }           

    divTimer.innerHTML = `${TimerZerado(data)}`;

    
    function addSeg (data, segundos) {
        data.setSeconds(data.getSeconds() + segundos);
        return data;
    }

    
    let TimerIniciar;
    let dataAtt;

    function iniciaTimer (evento) {
        clearInterval(TimerIniciar);
        TimerIniciar = setInterval(function() {
            dataAtt = addSeg(data, 1);
            divTimer.innerHTML = `${TimerZerado(dataAtt)}`;
        }, 1000);
        divTimer.style.color = `#448849`;
    }
    

    function paraTimer (evento) {
        clearInterval(TimerIniciar);
        setTimeout(function() {
            clearInterval(TimerIniciar);
        },);
        divTimer.style.color = `#7f1212`;
    }

    function zeraTimer (evento) {
        paraTimer();
        dataAtt.setHours(0,0,0,0);
        divTimer.innerHTML = `${TimerZerado(dataAtt)}`;
        divTimer.style.color = `#448849`;
    }
    

    btnIniciar.addEventListener('click', iniciaTimer);
    btnPausar.addEventListener('click', paraTimer);
    btnZerar.addEventListener('click', zeraTimer);
}
escopoPag();
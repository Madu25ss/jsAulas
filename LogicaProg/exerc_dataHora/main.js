//colocar icon e fotos de novo
function escopoPag() {
    const body = document.querySelector('#body');
    const data = new Date();
    const mainDiv = document.querySelector('.mostraData');

    const p = document.createElement('p');
    p.classList.add('retornoData');

    mainDiv.appendChild(p);

    
    function Retorno_objDate() {
        const diaSemana = data.getDay();//switch

        const dia = data.getDate();
        const mes = data.getMonth(); //switch
        const ano = data.getFullYear();

        let horas = data.getHours();
        let minutos = data.getMinutes();

        minutos<10? minutos = `0${minutos}`: minutos;
        horas<10?horas = `0${horas}`: horas;

        console.log(`${converteDiaSemana(diaSemana)}, ${dia} de ${converteMes(mes)} de ${ano} ${horas}:${minutos} `);
        p.innerHTML = `${converteDiaSemana(diaSemana)}, ${dia} de ${converteMes(mes)} de ${ano} ${horas}:${minutos} `;

    
        if (horas >= 16 && horas < 20) {
            body.style.backgroundColor = `linear-gradient(180deg, #b23621,rgb(252, 173, 116)) no-repeat`;
        }else if (horas < 4) {
            body.style.background = `linear-gradient(180deg, #213555,rgb(108, 119, 123)) no-repeat`;
        } else {
            body.style.background = `linear-gradient(180deg, #f6bc50, #FCF596)no-repeat`;

        }

    }

    Retorno_objDate();
};

function converteDiaSemana(diaX) {
    const valoresSemana = [`Domingo`, `Segunda-feira`, `Terça-feira`, `Quarta-feira`, `Quinta-feira`, `Sexta-feira`, `Sábado`];

    return valoresSemana[diaX];
            
};

function converteMes(mesX) {
    const valorMes = [`Janeiro`, `Fevereio`, `Março`, `Abril`, `Maio`, `Junho`, `Julho`, `Agosto`, `Setembro`, `Outubro`, `Novembro`, `Dezembro`];

    return valorMes[mesX];

};
escopoPag();



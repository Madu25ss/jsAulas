import { luaIcon, solIcon, meioSol, imgNoite, imgTarde, imgManha } from "./iconsVar.js";

function escopoPag() {
    const body = document.querySelector('#body');
    const data = new Date();
    const mainDiv = document.querySelector('.mostraData');

    const p = document.createElement('p');
    p.classList.add('retornoData');

    const icon = document.querySelector('.icon');
    icon.classList.add('icon');

    const img = document.createElement('img');
    img.classList.add('imagemGatinhos');


    mainDiv.appendChild(p);
    mainDiv.appendChild(img);
    

    
    function Retorno_objDate() {
        const diaSemana = data.getDay();//switch

        const dia = data.getDate();
        const mes = data.getMonth(); //switch
        const ano = data.getFullYear();

        const horas = data.getHours();
        let minutos = data.getMinutes();

        if (minutos < 10) {
            minutos = `0${minutos}`;
        }

        console.log(`${converteDiaSemana(diaSemana)}, ${dia} de ${converteMes(mes)} de ${ano} ${horas}:${minutos} `);
        p.innerHTML = `${converteDiaSemana(diaSemana)}, ${dia} de ${converteMes(mes)} de ${ano} ${horas}:${minutos} `;

        if (horas >= 16 && horas < 20) {
            body.style.background = `linear-gradient(180deg, #b23621,rgb(252, 173, 116))`;
            icon.innerHTML = `${meioSol}`;
            img.src = imgTarde;
        }else if (horas >= 20) {
            body.style.background = `linear-gradient(180deg, #213555,rgb(108, 119, 123))`;
            icon.innerHTML = `${luaIcon}`;
            img.src = imgNoite;
        } else {
            body.style.background = `linear-gradient(180deg, #f6bc50, #FCF596)`;
            icon.innerHTML = `${solIcon}`;
            img.src = imgManha;
        }

    }

    Retorno_objDate();
};

function converteDiaSemana(diaX) {
    const valoresSemana = [`Domingo`, `Segunda-feira`, `Terça-feira`, `Quarta-feira`, `Quinta-feira`, `Sexta-feira`, `Sábado`];

    switch (diaX) {
        case 0:
            return valoresSemana[0];
            break;
        case 1:
            return valoresSemana[1];
            break;
        case 2:
            return valoresSemana[2];
            break;
        case 3:
            return valoresSemana[3];
            break;
        case 4:
            return valoresSemana[4];
            break;
        case 5:
            return valoresSemana[5];
            break;
        case 6:
            return valoresSemana[6];
            break;
        default:
            return `Indefinido`;
            break;
    }
};

function converteMes(mesX) {
    const valorMes = [`Janeiro`, `Fevereio`, `Março`, `Abril`, `Maio`, `Junho`, `Julho`, `Agosto`, `Setembro`, `Outubro`, `Novembro`, `Dezembro`];

    switch (mesX) {
        case 0:
            return valorMes[0]
            break;
        case 1:
            return valorMes[1];
            break;
        case 2:
            return valorMes[2];
            break;
        case 3:
            return valorMes[3];
            break;
        case 4:
            return valorMes[4];
            break;
        case 5:
            return valorMes[5];
            break;
        case 6:
            return valorMes[6];
            break;
        case 7:
            return valorMes[7];
            break;
        case 8:
            return valorMes[8];
            break;
        case 9:
            return valorMes[9];
            break;
        case 10:
            return valorMes[10];
            break;
        case 12:
            return valorMes[12];
            break;
        default:
            break;
    }

};

escopoPag();


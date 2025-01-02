function escopoImc() {
    const form = document.querySelector('.formIMC');
    const resultado = document.querySelector('.resultadoCalculo');
    const p = document.createElement('p');

    function calculaImc (evento) {
        evento.preventDefault();

        const peso = form.querySelector('.pesoInputClass');

        const altura = form.querySelector('.alturaInputClass');

        resultadoImc(peso.value, altura.value);
        

        resultado.appendChild(p);
        p.style.paddingTop = `5px`;
        resultado.style.borderRadius = `10px`;
        resultado.style.height = `40px`;
        resultado.style.marginTop = `20px`;
    }

    function resultadoImc(pesoX, alturaY) {

        pesoX = Number(pesoX);
        alturaY = Number(alturaY);

        function validacao() {
            let validacaoResult;
                if (pesoX !== 0 && alturaY !== 0) {
                    validacaoResult = true;
                    if ((Number.isNaN(pesoX) === false) && (Number.isNaN(alturaY) === false)) {
                        validacaoResult = true;

                        pesoX >= 10 && alturaY > 1? validacaoResult = true : validacaoResult = false;

                    } else {
                        validacaoResult = false;
                    }
                }else {
                    validacaoResult = false;
                }
            return validacaoResult;
        }

        if (validacao() == true) {
            console.log(`peso:${pesoX}  ;  altura:${alturaY}`);
            let valorImc = (pesoX / (alturaY*alturaY));
            p.innerHTML = `SEU IMC É ${(valorImc.toFixed(2))} `;

            const nivelimc = ['(Obesidade grau 3)', ' (Obesidade grau 2)', '(Obesidade grau 1)', '(Sobrepeso)', '(Peso normal)', '(Abaixo do peso)'];

            if(valorImc >= 40) {
                p.innerHTML += nivelimc[0];
                resultado.style.backgroundColor = `#FF9B9B`;
                
            } else if (valorImc >= 35 /*&& valorImc <= 39.9*/) {
                p.innerHTML += nivelimc[1];
                resultado.style.backgroundColor = `#FF9B9B`;
    
            } else if (valorImc >= 30 /*&& valorImc <= 34.9*/) {
                p.innerHTML +=nivelimc[2];
                resultado.style.backgroundColor = `#FF9B9B`;
    
            }else if (valorImc >= 25 /*&& valorImc <= 29.9*/) {
                p.innerHTML += nivelimc[3];
                resultado.style.backgroundColor = `#FFD6A5`; 
    
            } else if (valorImc >= 18.5 /*&& valorImc <= 24.9*/) {
                p.innerHTML += nivelimc[4];
                resultado.style.backgroundColor = `#CBFFA9`;
            } else {
                p.innerHTML += nivelimc[5];
                resultado.style.backgroundColor = `#FF9B9B`; 
            }

        } else if (validacao() == false) {
            p.innerHTML = `Valores inválidos`;
            resultado.style.backgroundColor = `#D9DFC6`;
            console.log('Os inputs não são válidos segunda a função de valição');
        } else {
            console.log('Erro na validação');
        }

    }

    form.addEventListener('submit', calculaImc);
};
escopoImc();

/*melhorias: 
linha 16: resultado.appendChild(p) -> as condições alteram o innerHtml do <p>, que depois é adicionado dentro da div resultado. 

51: array com os níveis de imc, os ifs p.innerHtml recebem os respectivos indeces.
*/
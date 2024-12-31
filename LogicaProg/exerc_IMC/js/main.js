function escopoImc() {
    const form = document.querySelector('.formIMC');
    const resultado = document.querySelector('.resultadoCalculo');

    function calculaImc (evento) {
        evento.preventDefault();

        const peso = form.querySelector('.pesoInputClass');

        const altura = form.querySelector('.alturaInputClass');

        resultadoImc(peso.value, altura.value);
        

        resultado.style.borderRadius = `10px`;
        resultado.style.height = `40px`;
        resultado.style.marginTop = `20px`;
        resultado.style.paddingTop = `6px`;
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
            let valorImc = Math.round((pesoX / (alturaY*alturaY)));
            resultado.innerHTML = `SEU IMC É ${valorImc}`;

            if(valorImc > 40) {
                resultado.innerHTML += ` (Obesidade grau 3)`;
                resultado.style.backgroundColor = `#FF9B9B`;//trocar cor
                
            } else if (valorImc >= 35 && valorImc <= 39.9) {
                resultado.innerHTML += ` (Obesidade grau 2)`;
                resultado.style.backgroundColor = `#FF9B9B`;//trocar cor
    
            } else if (valorImc >= 30 && valorImc <= 34.9) {
                resultado.innerHTML += ` (Obesidade grau 1)`;
                resultado.style.backgroundColor = `#FF9B9B`;//trocar cor
    
            }else if (valorImc >= 25 && valorImc <= 29.9) {
                resultado.innerHTML += ` (Sobrepeso)`;
                resultado.style.backgroundColor = `#FFD6A5`; //trocar cor
    
            } else if (valorImc >= 18.5 && valorImc <= 24.9) {
                resultado.innerHTML += ` (Peso normal)`;
                resultado.style.backgroundColor = `#CBFFA9`;
            } else {
                resultado.innerHTML += ` (Abaixo do peso)`;
                resultado.style.backgroundColor = `#FF9B9B`; //trocar cor
            }

        } else if (validacao() == false) {
            resultado.innerHTML = `Valores inválidos`;
            resultado.style.backgroundColor = `#D9DFC6`;
            console.log('Os inputs não são válidos segunda a função de valição');
        } else {
            console.log('Erro na validação');
        }

    }

    form.addEventListener('submit', calculaImc);
};
escopoImc();
//retorna array com objetos: informações de um formulário
function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome'); //diminuir a area de procura: procurando dentro do FORM e não do DOCUMENT
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: nome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ;  ${peso.value}KG  ; ${altura.value}M</p>`;
    }


   
    form.addEventListener('submit', recebeEventoForm);//não atualiza a página depois de enviar o formulário
}

meuEscopo();

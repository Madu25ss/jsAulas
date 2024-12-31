//retorna array com objetos: informações de um formulários

//function pra ser chamada/executada no final
function formulario() {
    //criando constantes para componentes no html
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    //criando array p armazenar os objetos
    const pessoas = [];

    
    function eventoForm (evento) {
        evento.preventDefault();//não atualiza a página depois de enviar o formulário, armazenando os valores enviados

        const nome = form.querySelector('.nome');//como form já foi declarado, é possível diminuir a área de procura: procurando dentro do form e não do document

        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //.push: adiciona o registro no final do array
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);
        //+= no innerHtml pra ir "somando" os valores, mostrando todos juntos
        resultado.innerHTML += `<p>${nome.value}${sobrenome.value}  ;  ${peso.value}KG  ;  ${altura.value}M</p>`
    }

    //evento listener-> função que espera um evento acontecer: quando o evento de submit acontecer, a função eventoForm é executada
    form.addEventListener('submit', eventoForm);
}

formulario();
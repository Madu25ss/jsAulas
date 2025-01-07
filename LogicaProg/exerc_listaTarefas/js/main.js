
const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;      
};

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
};

function criaBtnApagar(li) {
    const botaoApagar = document.createElement('button');
    botaoApagar.style.marginLeft = '20px';
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
};

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBtnApagar(li);
    salvarTarefas();
};

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '');
        listaDeTarefas.push(tarefaTexto);
    }

    //criação de uma string do array listaDeTarefas pra json
    const tarefajson = JSON.stringify(listaDeTarefas);
    //local storage = lugar dentro do navegador onde é possível armazenar coisas que não vão se perder se a página for atualizada -> só aceita strings, por isso precisa converter o json com o stringify
    localStorage.setItem('tarefas', tarefajson);
};

function addTarefasSalvas() {
    const tarefasSalvas = localStorage.getItem('tarefas');
    const listaTarefasSalvas = JSON.parse(tarefasSalvas);
    
    for (let tarefasSalvas of listaTarefasSalvas) {
        criaTarefa(tarefasSalvas);
    }
}
addTarefasSalvas();
function escopoPag() {
    /*css, correção, entender essa parte: function apagarTarefa(evento) {
            const elementoLi = evento.target.parentElement;
            list.removeChild(li);
        }
    como manter a lista mesmo depois que atualiza?
    */

    const form = document.querySelector('.form');
    const input = document.querySelector('.inputText');
    const btnAddTarefa = document.querySelector('.button');
    const divListaTarefas = document.querySelector('.listaTarefas');

    const list = document.createElement('ul');

    divListaTarefas.appendChild(list);

    list.classList.add('.list');

    
    let listaTarefas = [];

    

    function addTarefa(evento) {
        evento.preventDefault();
        const tarefa = input.value;

        listaTarefas.push(tarefa);

        const li = document.createElement('li');
        li.textContent = tarefa;
        list.appendChild(li);

        const btnApagar = document.createElement('button');
        btnApagar.classList.add('.btnApagar');
        li.appendChild(btnApagar);
        btnApagar.innerHTML = `Apagar Tarefa`;

        input.value = '';


        function apagarTarefa(evento) {
            const elementoLi = evento.target.parentElement;
            list.removeChild(li);
        }


        btnApagar.addEventListener('click', apagarTarefa);
    
    }
    form.addEventListener('submit', addTarefa);
};
escopoPag();
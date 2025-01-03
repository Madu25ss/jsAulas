//criar uma div e inserir os objetos que estão no array elementos
const elementos = [
    {tag: 'p', texto: 'texto1'},
    {tag: 'div', texto: 'texto2'},
    {tag: 'footer', texto: 'texto3'},
    {tag: 'section', texto: 'texto4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');
div.classList.add('divElementos');

container.appendChild(div);

for (let i = 0; i < elementos.length; i++) {
    let pElementos = document.createElement(elementos[i].tag);
    pElementos.innerText += `${elementos[i].texto}`;

    div.appendChild(pElementos);
};
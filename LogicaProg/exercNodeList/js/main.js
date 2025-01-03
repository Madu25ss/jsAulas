const paragrafos = document.querySelector('.paragrafos');
//console.log(paragrafos); //retorna todos os p dentro da div .paragrafos

//retorna NODELIST(4) [p, p, p, p] -> não é um array mas aceita métodos de array
const elementosp = paragrafos.querySelectorAll('p');

//getComputedStyle tem todos os estilos que estão no body
const estilosBody = getComputedStyle(document.body);
const bgBody = estilosBody.backgroundColor;


for (let n of elementosp) {
    console.log(n);
    n.style.background = bgBody;
    n.style.color = `#fff`;
};
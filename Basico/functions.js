//funções
function soma(x, y) {
    const somaValores = x+y;
    return `resultado da soma = ${somaValores}`;
}
soma(2,4);

/* ou
const soma = function (x,y){
    return `resultado da soma = `, x+y;
}
console.log(soma(4,5));
*/

const retornoValores = soma(10,15);
console.log(retornoValores);

//error function 
const media = x => x/2;
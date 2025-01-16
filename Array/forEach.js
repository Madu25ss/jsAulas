//forEach 
const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let n of a1) {
    console.log(n);
}

//forEach passa por todos os valores igual o ForOf
//x.forEach(valor, indice, array)
a1.forEach(function(valor, indice) {
    valor *= 2;
    console.log(valor, indice);
});
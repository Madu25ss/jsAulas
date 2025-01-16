//filtrar os valores de um array -> filter, map, reduce

//filter = retorna um array com a mesma quantidade de elementos ou menos. Filter NÃO ALTERA O ARRAY ORIGINAL
//x.filter(valor, indice, array){}


//retorno nums > 10
const nums = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor) {
    /*
    if (valor > 10) return true;
    else return false;
    */ //forma mais reduzida: 
   return valor > 10; 
}
const numsFilter = nums.filter(callbackFilter); //filter precisa receber boolean -> true se o valor vai ser embutido em um array e false se não
//filter() vai executar callbackFilter em todo valor do array

/*ou 
const numsFilter = nums.filter(valor => valor>10);
*/// quando a função tem só uma linha
console.log(numsFilter);


const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'rosana', idade: 32},
    { nome: 'Wallace', idade: 47}
];

//filtrar pessoas com nome >= 5 letras
const filterNome = pessoas.filter(obj => obj.nome.length >= 5); 
console.log(filterNome);
//filtrar pessoas com idade > 50
const filterIdade = pessoas.filter(obj => obj.idade > 50);
console.log(filterIdade);
//filtrar pessoas nome termina com a
const filterLetra = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(filterLetra);

//MAP = altera os valores do  array. Altera o array. Sempre tem o mesmo tamanho que o array original.
//x.map(valor, indice, array){}
const doubleNums = nums.map(valor => valor*2);
console.log(doubleNums);

//retornar string com os nomes
const nomesString = pessoas.map(obj => obj.nome);
console.log(nomesString);

//retornar somente idade
const removeChave = pessoas.map(obj => ({ idade: obj.idade}));
console.log(removeChave);
//ou const removeNome = pessoas.map(obj => delete obj.nome); mas n funfa não 

//add id no obj, sem alterar o array original
const addId = pessoas.map(function (obj, indice) {
    const newObj = {...obj};
    newObj.id = indice+1;
    return newObj;
});
console.log(addId);
console.log(pessoas);

//REDUCE: reduzir o array a um elemento
//x.filter(acumulador, valor, indice, array){}, inicialização do acumulador);
const somaNums = nums.reduce(function(acumulador, valor) {
    acumulador += valor;
    return acumulador;
}, 0);

console.log(`soma dos valores = ${somaNums}`);

const numsMenos40 = nums.reduce(function(n, valor) {
    if (valor < 40) n.push(valor);
    return n;
}, []);
console.log(numsMenos40);


//retornar mais velha
const maisVelho = pessoas.reduce(function(n, valor) {
    if (n.idade > valor.idade) return n;
    return valor;
});
console.log(maisVelho);

console.log('##');
//Filter-Map-reduce
/*
const pares = nums.filter(function(valor) {
    return valor % 2 === 0;
}).map(function(valor) {
    return valor*2;
}).reduce(function(ac, valor) {
    return ac += valor;
});*/

const pares = nums
    .filter(valor => valor % 2 === 0)
    .map(valor => valor*2)
    .reduce((ac, valor) => ac += valor);
console.log(pares);
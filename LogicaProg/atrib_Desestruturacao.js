//Array: atribuição via desestruturação:
//troca de valores
let a = 'A';//b
let b = 'B';//c
let c = 'C';//a
const arrayInvertido = [b, c, a];
[a, b, c] = arrayInvertido; // atribuição por desestruturação
console.log(a,b,c);


const listaNumeros = [1,2,3,4,5];
const [primNum, ,tercNum, ...resto] = listaNumeros; //atribuição por desestruturação
//, , pula o valor
console.log(primNum, tercNum);
console.log(`resto da lista: ${resto}`); // ...resto -> cria variável que armazena os demais valores da lista que não foram "declarados"
/* OPERADOR ...
...REST -> retorna resto
...SPREAD -> ?
*/

//...REST & ...SPREAD
const listaNum = [[1 ,2 ,3],  [4 ,5 ,6],  [7 ,8 ,9]]; 
/*
indice 0 = (0,1,2) ; 1 = (0,1,2) ....
*/
const [,[, ,seis]] = listaNum;
console.log(seis);
//ou -> +fáceil
const [lista1, lista2, lista3] = listaNum;
console.log(lista2[2]);

//Objects: atribuição via desestruturação:
const pessoa = {
    nome: 'nomeX',
    idade: 30,
    endereco: {
        rua: 'ruaY',
        numero: 20
    }
};

const {nome} = pessoa; //atribuição via desestruturação
console.log(nome);
const {endereco: { rua: r = 'Sem rua', numero: n}} = pessoa; // se a chave 'rua' não tiver valor, 'sem rua' entra como valor default.
console.log(r, n);

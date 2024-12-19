//print no console | concatenação com variáveis = `${}`
console.log('');
console.log("");
console.log(``);

//declarar variáveis = let, var(antigo) -> mudam de valor
let x = 15;
console.log(`teste ${x}`);
//constantes = const -> não mudam de valor 

//template String = concatenação com ``
console.log(`variável x = ${x}`);


/*Tipo de dados primitivos: 
string, number(int|double|float), undefined(não aponta pra nenhum valor na memória), 
null(propositalmente vazio),
boolean(true|false)*/

//operadores: **potenciação
//parseint/ parsefloat -> transformar em int ou float
let y = '3';
console.log(parseInt(y));
console.log(typeof y);

//Funções dentro de objetos = métodos | fora do objeto = função
//MÉTODOS: alert, confirm e prompt(recebem respostas) 
// -> window.prompt, ... 
//exemplo: converter métodos pra número -> Number
//const idade = prompt('Idade: '); idade = Number(idade);

//troca de valores
let a = 'A';//b
let b = 'B';//c
let c = 'C';//a

let auxA = a;

a = b;
b = c;
c = auxA;
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);
//ou 
[a, b, c] = [b, c, a];

//Strings: métodos: 
let string = "teste teste";

console.log(string.charAt(3)); // ou string[3]; caractere no index (x)
console.log(string.indexOf('t')); // index do primeiro registro do caractere (x)
console.log(string.lastIndexOf('t')); // index do último registro do caractere (x)
console.log(string.replace('e', 0)); //substituição
console.log(string.length); //contagem de caracteres 1-x
console.log(string.slice(2, 5)); // 5-2 -> retorna caracteres restantes
console.log(string.split(' ')); //divide pelo caractere x
console.log(string.toUpperCase()); // também toLoweCase() 

//numbers
let z = 2;
let num = 10.1234
console.log(z.toString()); // número -> string
console.log(num.toString(2)); // número -> string binário
console.log(num.toFixed(2)); // precisão das casas decimais
console.log(Number.isInteger(num)); // bollean, int ou não 

//Imprecisão dos números decimais -> decimal base 10, binário base 2 = inconssistência 

//Object math
//arredondamento
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.max(1,2,3)); // retorna maior , Math.min(retorna menor)
console.log(Math.random()); // Math.random() * (x - y) + x -> gera random entre x e y

//arrys []
const lista = [1,2,3,4];
console.log(lista[2]);
lista[2] = 7;
console.log(lista[2]);

lista.unshift(0); // adicionar na primeira posição
lista.push(10); // adicionar na última posição
const pop = lista.pop(); // remove o último elemento do array
const shift = lista.shift(); // remove o primeiro elemento do array
console.log(pop);
console.log(shift);
//shift e pop alteram os indexes, não deixa elemento vazio
delete lista[2]; // nao altera o indice, deixa um elemento vazio

console.log(lista.length);
console.log(lista);

console.log(lista.splice(0,3)); // traz o intervalo de elementos entre os indexes 0-3 0,1,2

/*const, valores mutáveis e imutáveis
    -> tipos primitivos são imutáveis: não podem ter os valores alterados (ex: number, String, null, symbol, boolean, bigint);
    -> não primitivos são mutáveis: podem ter os valores do objeto alterados (ex: arrays e outros objetos). 
    **Mutáveis: estrutura mais complexa, sustentem outros valores ou comportamentos.

    -> const com primitivos: const não vai aceitar a reatribuição de valores + tipo primitivo é imutável.
    -> const com não primitivos: const não vai aceitar a reatribuição de valores mas o não primitivo aceita alteração dos seus valores dentro do objeto: 
        const lista = [1, 2, 3]
        lista[0] = 7
    
        ->Let aceita reatribuições: 
        let lista = [1, 2, 3]
        let lista = 'texto'

*/

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

//objetos
// [] = array , {} objeto -> individual ex:chave e valor json
const pessoa1 = {
    nome: 'a',
    idadePessoa1: 20
};
console.log(pessoa1.idadePessoa1);
//melhor: 
function listaPessoas (nome, idade) {
    return {
        nome: nome,
        idade: idade
    };
}
/*ou
listaPessoas (nome, idade) {
    return {
        nome,
        idade
    };
}
*///sem 'function' e sem passar o valor da chave
const pessoa2 = listaPessoas('b', 30);
console.log(pessoa2);
console.log(pessoa2.idade);

const mensagem = {
    dia: 25,
    mes: 10,

    PrintMensagem() {
        return `Mensagem do dia ${this.dia}/${this.mes}`;
    }
};

console.log(mensagem.PrintMensagem());









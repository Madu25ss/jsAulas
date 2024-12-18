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













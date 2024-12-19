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

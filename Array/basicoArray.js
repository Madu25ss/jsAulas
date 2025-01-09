//arrays
//declaração literal
const array1 = ['a', 'b', 'c', 'd', 'e', 'f'];
//declaração construtor: menos usado
const array2 = new Array('a', 'b');
console.log(array2);

/*// array3 = array1 -> ficam sincronizados, alterações no 3 alteram 1 e vice versa 
const array3 = array2;
console.log(array3);
array3.pop();
console.log(array3);
*/
//array3 = [...array1] -> array3 recebe uma cópia do array1, logo as alterações em um não afetam o outro.
const array3 = [...array1];
console.log(array3);
array3.pop();
console.log(array3);
console.log(array1);

console.log('#')
//.pop() remove do final, .shift() remove do começo.
//.push() adiciona no final, .unshift() adiciona no começo.
console.log(array1);
array1.pop();
console.log(array1);
array1.shift();
console.log(array1);

array1.push('c');
console.log(array1);
array1.unshift('a');
console.log(array1);

//slice() -> separa elementos do erray -> (onde começa, quantos elementos tira)
let slice = array1.slice(0, 3);
console.log(slice);
slice = array1.slice(0, -4);
console.log(slice);

//split() -> separa uma string e forma um array
const nome = 'nome sobrenome';
const nomeSeparado = nome.split(' '); //-> split(' ') separando pelo espaço
console.log(nome);
console.log(nomeSeparado);

//join() -> junta todas as strings e forma um array
const join = nomeSeparado.join(' ');
console.log(join);
//splice() -> função que faz shift, unshift, pop, push etc etc

const array1 = ['a', 'b', 'c', 'd', 'e', 'f'];
//x.splice(indice onde começar a deletar, quantos deletar, adicionando elementos)
const addElementos = ['g', 'h', 'i'];
//array1.splice(1, 3, ...addElementos); //elementos adicionados entram aonde foi deletado
//ou array1.splice(1, 3, 'g', 'h');

//a partir do indice 3, removi 3 e adicionei elementos
array1.splice(3, 3, ...addElementos); 
console.log(array1);

//retornar os removidos -> retorna array
const arrayDeletados = array1.splice(3, 3); 
console.log(array1);
console.log(array1, arrayDeletados);

//com indices negativos
                     //-5                 //-1
const array2 = ['a', 'b', 'c', 'd', 'e', 'f'];
const deleteNegativo = array2.splice(-5, 3);
console.log(array2);
console.log(array2, deleteNegativo);

//number.MAX_VALUE -> valor máximo que tem no js
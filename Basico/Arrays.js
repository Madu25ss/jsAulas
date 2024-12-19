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
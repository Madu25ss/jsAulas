//métodos úteis para objetos
//Object. assign, keys, value, freeze, defineProperty, defineProperties, getOwnPropertyDescriptor, entries

//copiar objeto -> {...spread} ou Object.assign
const p1 = {preco: 10, qtd: 12};
const copiaP1 = {...p1, nome: 'copiaP1'}; //copiaP1 consegue ser alterado sem afetar p1
console.log(copiaP1);
console.log(p1);
copiaP1.qtd = 30;
console.log(copiaP1);
//ou
const copia2 = Object.assign({}, p1, {nome: 'copia2'});
console.log(copia2);

//chaves do objeto -> Object.keys(x); || valores do objeto: Object.value(x)
console.log(Object.keys(copia2));
console.log(Object.values(copia2));


//travar objeto, não permite alterações -> Object.freeze(x);
Object.freeze(copia2);

//object.defineProperties .Property

//descrição das propriedades definidas com o defineProperties no objeto -> Object.getOwnPropertyDescriptor(objeto, 'nomeChave');
//const p1 = {preco: 10, qtd: 12};
console.log(Object.getOwnPropertyDescriptor(p1, 'qtd'));
Object.defineProperty(p1, 'qtd', {
    writable: false,
    configurable: false
});
console.log(Object.getOwnPropertyDescriptor(p1, 'qtd'));

//Object.entries(x) -> array das chaves e valores
console.log(`Object entries: ${Object.entries(p1)}`);

//iterando 
for (let n of Object.entries(p1)) {
    console.log(n);
}
for (let [chave, valor] of Object.entries(p1)) {
    console.log(chave, valor);
}
for (let valor of Object.entries(p1)) {
    console.log(valor[0], valor[1]);
}



//Object.defineProperty() e .defineProperties();
//fazer com que só 1 atributo seja "Privado"
function Produto(nome, preco, estoque) {
    /*
    this.nome = nome;
    this.preco = preco;
    //não mostra estoque
    */
   
   //definição dos outros atributos = +1 atributo = defineProperties
   Object.defineProperties(this, {
       nome: {
           enumerable: true,
           value: nome, 
           writable: false, 
           configurable: false 
       },
       preco: {
           enumerable: true,
           value: preco, 
           writable: false, 
           configurable: false 
       },
   })

    //definições de estoque = 1 atributo = defineProperty
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave de estoque, valor undefined
        value: estoque, //mostra o valor de estoque
        writable: false, //valor alterável ou naõ
        configurable: false //chave pode apagar/reconfigurar a chave
    });


}
 
const p1 = new Produto('p1', 20, 3);
p1.estoque = 4;
delete p1.estoque;
console.log(p1);

console.log(Object.keys(p1));
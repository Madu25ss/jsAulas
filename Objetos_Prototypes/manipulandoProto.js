
//= conta objA = new Object()
const objA = {
    chaveA: 'A'
};
//objA._proto_ === Object.prototype
const objB = {
    chaveB: 'B'
};
const objC = {
    chaveC: 'C'
};

//cadeia de prototypes, "herança"
Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);

Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);
console.log(objC.chaveB);

console.log(Object.getPrototypeOf(objC));

//

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(valorDesconto) {
    this.preco -= (this.preco * (valorDesconto/100));
} 

const p1 = new Produto('produto1', 50);
console.log(p1);
p1.desconto(100);
console.log(p1);

//sem os métodos do proto que tem no construtor de Produto
const p2 = {
    nome: 'produto2',
    preco: 15
};

//p2 recebe os métodos do proto
Object.setPrototypeOf(p2, Produto.prototype);
p2.desconto(10);
console.log(p2);
//ou
const p3 = Object.create(Produto.prototype, {
    nome: {
        value: 'produto3',
        enumerable: true,
        writable: true,
        configurable: false
    },
    preco: {
        value: 40,
        enumerable: true,
        writable: true,
        configurable: false
    }
});
console.log(p3);
p3.desconto(100);
console.log(p3);


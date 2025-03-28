//new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    //_proto_: Object.prototype
};

const objB = {
    chaveB: 'B'
    //_proto_: ObjA
};

const objC = new Object();
objC.chaveC = 'C';

//objA vira prototype do objB, então mesmo não tendo nenhuma ligação de A em B, B vai poder ter os prototypes de A nele, sem quebrar a cadeia de ligação entre os protos.
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC,objB);

console.log(objC.chaveA);


function Produto (nome, preco) {
    this.nome = nome;
    this.preco = preco;

}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const produto1 = new Produto('Camiseta', 50);
//produto1.desconto(100);
produto1.aumento(100);

console.log(produto1);

//setando o prototype do objeto que está sendo criado e os atributos dele 
const produto3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
});

produto3.aumento(10);
console.log(produto3);
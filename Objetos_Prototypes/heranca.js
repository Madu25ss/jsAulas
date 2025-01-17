//herança

//produto -> aumento e desconto
//atributo específico do produto: a -> cor , b= material
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(porcentDesconto) {
    this.preco -= this.preco * (porcentDesconto/100);
}

Produto.prototype.aumento = function(porcentAumento) {
    this.preco += this.preco * (porcentAumento/100);
}

const p1 = new Produto('a', 10);
p1.desconto(50);
console.log(p1);
p1.aumento(50);
console.log(p1);

//atributo específico do produto: a -> cor , b= material
function a(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor
}
a.prototype = Object.create(Produto.prototype);
a.prototype.constructor = a;

const a1 = new a('produtoTipoA', 12, 'azul');
console.log(a1);

a.prototype.aumento = function(porcentAumento) {
    this.preco += porcentAumento;
}

a1.aumento(10);
console.log(a1);
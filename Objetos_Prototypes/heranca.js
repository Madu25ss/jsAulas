//"herança" ñ existe no js, -> "Delegação"
//camiseta = cor, caneca = material -> Produto -> aumento e desconto

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};


function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
//criando um objeto vazio e atribuindo o prototype de Produto pra ele, assim passando para o Camiseta.Prototype: instancias de camiseta podem usar o aumento/desconto agr
Camiseta.prototype = Object.create(Produto.prototype);
//tudo oq não existir em Camiseta.prototype vai ser delegado para Produto.prototype.

const camiseta = new Camiseta('regata', 7.5, 'Preto');
camiseta.aumento(10);
camiseta.desconto(7.5);
console.log(camiseta);

function Caneca(nome, preco, material, estoque) {
   Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get:() => {return estoque},
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('xícara', 15.8, 'Plástico', 10);
console.log(caneca);
caneca.aumento(20);
console.log(caneca);
caneca.desconto(3.4);
caneca.estoque = 24;
console.log(caneca.estoque);
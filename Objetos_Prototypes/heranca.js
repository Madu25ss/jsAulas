//Produto -> aumento de preço, desconto
//Camiseta = cor, caneca = material


//DEFINIÇÃO DE PRODUTO: pai dos produtos
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

//é preciso passar o prototype de Produto para Camiseta
Object.setPrototypeOf(Camiseta, Produto);

//DEFINIÇÃO DE UM PRODUTO FILHO
function Camiseta (nome, preco, cor) {
    //lincando a função de Produto com a de Camiseta, camiseta vai herdar nome e preco do Produto
    Produto.call(this, nome, preco);
    this.cor = cor;

};

//o objeto camiseta 1 agora se chama "Camiseta", e não "Produto" só por ser uma instância de produto, herdando métodos e atributos de "Produto" mas podendo criar os seus próprios.
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual) {
    this.preco += this.preco * (percentual / 100);
};


const produto1 = new Produto('testeProduto', 111);

const camiseta1 = new Camiseta('regata', 7.5, 'Preto');
camiseta1.aumento(100);
console.log(camiseta1);
console.log(produto1);

function Caneca(nome, preco, cor, material, estoque) {
    Produto.call(this, nome, preco);

    this.cor = cor;
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor != 'number') return;
            estoque = valor;  
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.desconto = function(percentual) {
    this.preco -= this.preco*(percentual /100);
} 

const caneca1 = new Caneca('caneca1', 25, 'rosa', 'porcelana', 20);
caneca1.desconto(50);
console.log(caneca1);


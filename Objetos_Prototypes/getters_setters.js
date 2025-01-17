//Getters e setters: acessar e proteger propriedades.
//get: retorna o valor
//set: modifica o valor
//construtor
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        //value e writable vão ser manipulados pelo getter
        get: function() {
            return estoque;
        },
        set: function(valor) {
            estoque = valor;
        }
    });
}

const p1 = new Produto('produtoX', 12, 20);
console.log(p1);
console.log(p1.estoque);
//passando o valor para o setter: 
p1.estoque *= 2;
console.log(p1.estoque);

//factory
function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        }, 
        set nome(novoNome) {
            nome = novoNome;
        }
    }
};
const factory1 = criaProduto('produtoFactory');
console.log(factory1.nome);
factory1.nome = 'novoNome';
console.log(factory1.nome);

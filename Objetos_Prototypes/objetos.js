//declarações literais([], 123, function) e *objeto* = par de chave e valor

const data = {
    dia: 16,
    mes: 'Janeiro'
};

console.log(data);
console.log(data.dia);
console.log(data.mes);
//ou
console.log(data['dia']);//útil em casos tipo:
const dataDia = 'dia';
console.log(data[dataDia]);

//funções dentro do obj
data.mostraData = function() {
    console.log(`${data.dia} de ${data.mes}`);
}
data.mostraData();

//construtor do objeto
const obj = new Object();
obj.nome = 'x';
console.log(obj);

/* apagar uma chave e valor
delete data.dia;
console.log(data);
*/

//objeto molde = factory function ou constructor function -> classes// js é baseado em protótipos 
//moldes que atrelam uma constante 'this' ao que o molde faz

//com Factory Function
//não precisam ter letra maiúscula e não precisam ter 'new' na declaração de novos objetos.
function criaPessoa(nome, idade) {
    return {
        nome, 
        idade,
        //método que se comporta como um atributo
        get descricao() {
            return `${this.nome} com ${this.idade} anos`;
        }
    };
};
const pessoa1 = criaPessoa('pessoa1', 20);
//Não permitir alterações dos valores das chaves dentro de um objeto:  Object.Freeze();
Object.freeze(pessoa1);
pessoa1.nome = 'p1';
//não altera

console.log(pessoa1);
console.log(pessoa1.descricao);

//com constructor function
//= Construtores precisam ter letra maiúscula e na declaração de novos objetos devem ser com 'new'
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    //travar o objeto, não permite que os valores sejam alterados ou deletados
    Object.freeze(this);
}

const pessoa2 = new Pessoa('pessoa2', 30);
console.log(pessoa2);






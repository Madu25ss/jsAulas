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

//com Factory Function
function criaPessoa(nome, idade) {
    return {
        nome, 
        idade,
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
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    Object.freeze(this);
}

const pessoa2 = new Pessoa('pessoa2', 30);
console.log(pessoa2);






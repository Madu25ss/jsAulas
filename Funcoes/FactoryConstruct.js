//Funções fábrica: Factory Function -> funções que retornam objetos
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join();
        },
        fala() {
            return `Nome: ${this.nome} // Sobrenome: ${this.sobrenome}`;
        },
        altura: a,
        peso: p,
        //imc como método:
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
        /*imc como "atributo": getter -> só obter o valor do return 
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
        */
    };
}


const p1 = criaPessoa('nome1', 'sobrenome1', 1.8, 80);
console.log(p1.fala());
console.log(p1.nome);
//imc como método: 
console.log(p1.imc());
//imc como atributo: 
//console.log(p1.imc);
//console.log(p1.nomeCompleto);
p1.nomeCompleto = 'nome2 sobrenome2';
console.log(p1.nomeCompleto);








//Funções construtoras: constructor functions -> cria objetos na declaração deles, retorna objetos 
class Construtor {
    constructor(nome, sobrenome) {
        //métodos privados 
        const id = 123;

        //métodos públicos
        this.nome = nome;
        this.sobrenome = sobrenome;
        console.log(nome, sobrenome);

        this.metodo = function () {
            console.log(this.nome + ` método dentro do objeto.`);
        };
    }
};

const pessoa1 = new Construtor('x', 'y');
const pessoa2 = new Construtor('a', 'b');
pessoa1.metodo();

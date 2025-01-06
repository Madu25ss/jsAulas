//funções IIFE immediately invoked function expression: funções invocadas imediatamente
//função imediata: fica protegido do escopo global
(function() {
    const exemplo = 123;
    console.log(exemplo);
})();

const exemplo = 123;
console.log(exemplo);


//Funções fábrica: Factory Function -> funções que retornam objetos
//Funções construtoras: constructor functions -> cria objetos na declaração deles, retorna objetos 
function Construtor(nome, sobrenome) {
    //métodos privados 
    const id = 123;

    //métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    console.log(nome, sobrenome);

    this.metodo = function() {
        console.log(this.nome + ` método dentro do objeto.`);
    }
};

const pessoa1 = new Construtor('x', 'y');
const pessoa2 = new Construtor('a', 'b');
pessoa1.metodo();

//Funções recursivas: 
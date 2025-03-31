//forma diferente de fazer função construtora
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        
    }
};

const p1 = new Pessoa('nomeA', 'sobrenomeA');
console.log(p1);
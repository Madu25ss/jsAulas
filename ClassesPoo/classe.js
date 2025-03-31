//forma diferente de fazer função construtora
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  //metodos
  falar() {
    console.log(`${this.nome} falando`);
  }

  comer() {
    console.log(`${this.nome} comendo`)
  }

  beber() {
    console.log(`${this.nome} bebendo`)
  }
}

//instanciando = criando um objeto (p1) a partir da clase (Pessoa)
const p1 = new Pessoa("nomeA", "sobrenomeA");

console.log(p1);
console.log(p1.falar());
console.log(p1.comer());
console.log(p1.beber());
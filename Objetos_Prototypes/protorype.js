//prototypes: base js para poo(herança, polimorfismo...)
//prototype = propriedade da função construtora
//construtor
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    //função dentro do construtor ocupa recursos: toda instancia criada vai ter uma função que 'tem a mesma estrutura'/ faz a mesma coisa. Protorypes ajuda com isso, passando valores entre membros.
    //this.pessoaInfos = () => `${this.nome} tem ${this.idade} anos`;
    Pessoa.prototype.pessoaInfos = () =>  `${this.nome} tem ${this.idade} anos`;
}

//instanciando -> criando outros objetos a partir de uma função construtora
const p1 = new Pessoa('nome1', 20);



//protótipo : modelo/base que pode ser usada várias vezes. Todos os objetos tem propriedade(_proto_): armazena métodos. 
console.log(p1.pessoaInfos()); 


//o construtor Pessoa vai ter o proto pessoaInfo, toda instancia vai ter o proto, podendo ser usado ou nao. Ex: Date -> getHour, getSeconds, etc
//Pessoa.prototype === p1._proto_


//existe uma cadeia de prototypes, sendo o topo dela o Object.prototype


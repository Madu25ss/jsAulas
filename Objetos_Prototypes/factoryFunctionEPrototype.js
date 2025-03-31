//??
//manipulando proto com factory function

//criando métodos desaclopados
const metodoDesaclopado = {
    metodo() {
        console.log(`${this.nome} executando um método desaclopado`);
    }
}

// passando os métodos desaclopados
//const pessoaPrototype = {...metodoDesaclopado};
//const pessoaPrototype = Object.assign({}, metodo desaclopado);


function criaPessoa(nome, sobrenome) {

    //prototype do que for instanciado
    
    const pessoaPrototype = {
        qualquercoisa() {
            console.log(`Função qualquer coisa pra ${this.nome}`)
        }
    };


    //retornando com prototype
    return Object.create(pessoaPrototype, {
        //da pra definir o value, configurable, enumerable, etc...
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });

        //nome, 
        //sobrenome
        /* método aclopado, vai estar dentro de todas as instâncias
        qualquercoisa() {
            console.log(`Função qualquer coisa pra ${this.nome}`)
        }
        */
   
}

const p1 = criaPessoa('pessoa1Nome', 'pessoa1Sobrenome');
//console.log(p1.metodo());
console.log(p1);

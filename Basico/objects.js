//objetos
// [] = array , {} objeto -> individual ex:chave e valor json
const pessoa1 = {
    nome: 'a',
    idadePessoa1: 20
};
console.log(pessoa1.idadePessoa1);
//melhor: 
function listaPessoas (nome, idade) {
    return {
        nome: nome,
        idade: idade
    };
}
/*ou
listaPessoas (nome, idade) {
    return {
        nome,
        idade
    };
}
*///sem 'function' e sem passar o valor da chave
const pessoa2 = listaPessoas('b', 30);
console.log(pessoa2);
console.log(pessoa2.idade);

const mensagem = {
    dia: 25,
    mes: 10,

    PrintMensagem() {
        return `Mensagem do dia ${this.dia}/${this.mes}`;
    }
};

console.log(mensagem.PrintMensagem());

//Valor primitivo e por referência
//primitivos(imutáveis): string, number, boolean, undefined, null, bigint, symbol
let aX = 2;
let bX = aX;
aX = 10
console.log(aX, bX);
//valores imutáveis 'recebem' um valor, bX não vai ser alterado se aX for

let cX = [1, 2, 3];
let dX = cX;
console.log(cX, dX);
dX.push(10);
console.log(cX, dX);
//valores mutáveis 'apontam' para um valor, então se cX for alterado , dX também é alterado, se dX for alterado, cX também é -> apontam para o mesmo valor na memória



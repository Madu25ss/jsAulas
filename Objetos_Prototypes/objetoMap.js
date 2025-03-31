//mapeamento de objetos -> ids

const pessoas = [
    {id: 3, nome: 'nome3'},
    {id: 2, nome: 'nome2'},
    {id: 1, nome: 'nome1'},
];

//mapeia os objetos definindo um id string crescente pra cada objeto
const novasPessoas = {};
for (const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas[id] = {...pessoa};
}

console.log(novasPessoas);

//caso a ordem do retorno não possa ser crescente, usar new Map com get e set: 
//mantem a ordem de inserção dos objetos e os ids são Number
const novasPessoasMap = new Map();
for (const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoasMap.set(id, {...pessoa});
}

console.log(novasPessoasMap);
//get objeto específico: 
console.log(novasPessoasMap.get(3));
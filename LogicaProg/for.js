//ESTRUTURAS DE REPETIÇÃO: 
//FOR

//com number
let n = 0;

for (let i=5; i>=n; i--) {
    console.log(`Linha ${i}`);
};

//com array
const lista = ['um', 'dois', 'tres'];

for (let i=0; i< lista.length; i++) {
    console.log(lista[i], `no indece: ${i}`);
};

//exerc for e html, árvore dom

//FOR IN: lê os indeces ou chaves de um objeto
/*
for (let i=0; i< lista.length; i++) {
    console.log(lista[i], `no indece: ${i}`);
};
*/
for (let index in lista) {
    console.log(lista[index]);
}

const pessoa = {
    nome: 'nomeX',
    idade: 20
};

for (let chaves in pessoa) {
    console.log(chaves);
}

for (let chaves in pessoa) {
    console.log(chaves, pessoa[chaves]);
}



//FOR OF: 
const nomes = ['nome', 'Sobrenome'];

for (let valor of nomes) {
    console.log(valor, nomes[valor]);
}

//for each??

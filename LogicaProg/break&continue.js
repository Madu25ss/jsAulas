//break: para a execução
const listaNumeros = [1, 2, 3, 4, 5];

for (let valores of listaNumeros) {
    if (valores === 3) {
        console.log(`##`, valores);
        break;
    }
    console.log(valores);
}

console.log('-----')
//continue
for (let valores of listaNumeros) {
    if (valores === 2) {
        console.log(`##Continue`, valores);
        continue;
    }
    console.log(valores);
}

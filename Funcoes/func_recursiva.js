//Função recursiva: função que se chama de volta. -> (tipo um while)
//js não aceita tantas repetições recursivas

function recursiva(max) {
    console.log(max);
    if (max >= 5) return;
    max++;
    recursiva(max);
}
recursiva(0);
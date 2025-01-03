//Formas de declarar funções 

//function hoisting: js eleva pro topo do arquivo a função
function funcHoisting() {
    console.log('acontece function hoisting');
};

//Functions = first-class objects: possível tratar as funções como dados.
//->Function Expression:
const dadoX = function(){
    console.log('dado executa função');  
};
dadoX();

//Arrow functions: function expression mais curta
const funcaoArrow = (num) => {
    num>10? console.log('maior10'): console.log('menor10');
};
funcaoArrow(11);

//Parametros

//não funciona na arrow function
//arguments: sustenta todos os parametros enviados quando a função não precisa de parametros.
function funcao() {
    console.log(arguments);
    console.log(arguments[0]);

}
funcao(1, 2, 3);

//definindo valor padrão 
function valorPadrao(a,b) {
    //b receb b ou valor padrão 0
    b = b || 0;
    console.log(a+b);
};
//ou 
function valorPadrao(a,b = 2, c = 3) {
    console.log(a+b+c);
};
valorPadrao(2, undefined);

//atribuição por desestruturação
function obj({nome, idade}) {
    console.log(nome, idade);
}
obj({nome: 'nomeX', idade: 20});

//return 

//escopo lexico e closure

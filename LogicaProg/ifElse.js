//sintaxe if else 
let x = 0;
let y = x

if (x >=10) {
    console.log('x >= que 10');
} else {
    console.log('x menor que 10');
};

if (x >=10) {
    console.log('x >= que 10');
} else if (x > 0) {
    console.log('x menor que 10, maior que 0');
} else {
    console.log('x = 0');
};

if (x === y) {
    console.log('x e y iguais')
} else {
    console.log('não iguais');
};

//Operador ternário ? : -> condição? verdadeiro: falso
console.log(x>10? 'x maior que 10': 'x menor ou igual a 10');


//variáveis VAR ou function -> hosting -> elevar a declaração da variável no começo do código -> erro: 'undefined' -> não acontece com const.





//recebe dois numeros, retorna maior
function numMaior(num1, num2) {
    /*
    let msg;
    if (num1 > num2) {
        msg = `${num1} é maior que ${num2}.`;
    } else if (num2 > num1) {
        msg = `${num2} é maior que ${num1}.`;
    } else {
        msg = 'Valores iguais';
    }

    return console.log(msg);
    */

   if(num1 !== num2) {
        console.log(num1>num2? `${num1} é maior que ${num2}.` :  `${num2} é maior que ${num1}.`);
   } else {
        console.log(`valores iguais`);
   }

};
numMaior(10, 10);

//ou: error function
const numMaior2 = (x, y) => x>y? `${x} maior que ${y}` : `${y} maior que ${x}`;
console.log(numMaior2(2,20));


//ePaisagem: largura > altura = true
const EPaisagem = (altura, largura) => largura>altura;
console.log(EPaisagem(10, 30.5));

//fizzBuzz

let num = 15;
function FizzBuzz(num) {
    let msg;

    if (typeof(num) === 'number') {
        if (num>0 && num <= 100) {
            if ((num % 3 == 0) && (num % 5 ==0)) {
                console.log('FizzBuzz');
            } else if (num % 3 == 0) {
                console.log('Fizz');
            } else if (num % 5 == 0) {
                console.log('Buzz')
            }else {
                console.log(`${num}`);
            }
        } else {
            console.log('Num é inválido');
        }
    } else {
        console.log('Num não é um número');
    }

}
FizzBuzz(num);
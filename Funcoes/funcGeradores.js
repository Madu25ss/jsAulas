///Funções geradoras: retornam valores em diferentes tempos -> Lazy avaliation: não entrega todos os resultados de um vez 

function* geradora() {
    yield 'valor1';
    yield 'valor2';
    yield 'valor3';
}

const g1 = geradora();
//retorna as chaves do primerio yield: value(valor da chave) e done(se todos os yields da função já foram executados)
//console.log(g1.next());
console.log(g1.next().value); //valor1
console.log(g1.next().value);//valor2
console.log(g1.next().value);//valor3
console.log(g1.next().done); //true pq todos os campos já foram executados

function* geradora2() {
    yield* geradora();
    yield 'valor4';
    yield 'valor5';
    yield 'valor6';
}

function* geradora3() {
    //yield* geradora();
    //yield* geradora2();
    yield function() {
        console.log('função 1');
    };

    yield function() {
        return console.log(`função return`);
    }

    //para a execução da função geradora -> yilds depois desse não serão executados
    return function() {
        console.log(`função return final`);
    }

    yield function() {
        console.log('função 2');
    };

}

const g2 = geradora2();
console.log(g2.next());
console.log(g2.next());

console.log('##');
const g3 = geradora3();


const func1 = g3.next().value;
func1();
const func2 = g3.next().value;
func2();
const func3 = g3.next().value;
func3();


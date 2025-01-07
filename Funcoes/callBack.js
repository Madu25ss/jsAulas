
console.log('função callback###');
//funções CallBack -> funções que são executadas quando alguma ação acontece/é finalizada
//servem para "controlar" execuções dentro de uma aplicação
function rand(min = 1000, max = 5000) {
    return Math.floor(Math.random() * (max - min) + min); 
}

//callback(no  parâmetro) é uma função que pode ou não ser executada, se for necessário executar o callback depois da execução da função então ele será executado

function f1(callback) {
    setTimeout (function() {
        console.log('f1'); 
        if (callback) callback(); 
    }, rand());
}
function f2(callback) {
    setTimeout (function() {
        console.log('f2');  
        if (callback) callback();
    }, rand());
}
function f3(callback) {
    setTimeout (function() {
        console.log('f3');  
        if (callback) callback();
    }, rand());
}

//tudo oq for passado como parâmetro vai cair como callback
//f1(console.log('callback do f1'));


//f2-f3-f1 a execução sempre vai seguir essa ordem independente do rand
//callback hell: muitas chamadas de callback
f2(function() {
    f3(function() {
        f1(function() {
            console.log('f1 dinovo');
        })
    });
});

//melhorado
f2(f2Callback);
function f2Callback() {
    f3(f3Callback);
}
function f3Callback() {
    f1(f1Callback);
}
function f1Callback() {
    console.log('f1 de novo');
}


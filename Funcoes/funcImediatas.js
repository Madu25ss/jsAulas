//funções IIFE immediately invoked function expression: funções invocadas imediatamente
//função imediata: fica protegido do escopo global e é executada imediatamente
(function(num) {
    const exemplo = 123 + num;
    console.log(exemplo);

    (function() {
        const exemplo = 123;
        console.log(exemplo);
    })();
})(2);

const exemplo = 123;
console.log(exemplo);




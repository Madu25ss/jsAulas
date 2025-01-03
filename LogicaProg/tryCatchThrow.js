//Tratamento e lançamento de erros: TRY, CATCH E THROW

// try tenta executar, catch captura o erro/exceção(e) e executa algo.
try {
    console.log(varX);
} catch(e) {
    console.log('variável não existe');
}

function soma (x, y) {
    if (typeof(x) !== 'number' || typeof(y) !== 'number') {
        throw new Error('x e y precisam ser números');
    }

    //throw ('x e y precisam ser números') retorna: 'x e y precisam ser números'
    //throw new Error/referenceError('x e y precisam ser números') retorna Error: 'x e y precisam ser números' e log do erro. (Error/referenceError são classes de erros -> funções construtoras).

    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(e) {
    console.log('erro :)');
}

///Try, catch e finally
/*
try {
    /EXECUTA QUANDO NÃO TEM ERROS
} catch (e) {
    /EXECUTA QUANDO TEM ERROS
} finally {
    // EXECUTA SEMPRE   
}
*/
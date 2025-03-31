//Polimorfismo: criando uma superClasse conta que implementa classe Conta corrente e Conta poupança
//js faz polimorfismo de reescrita, onde é possível sobrescrever os métodos e funções.

//Agencia, conta e saldo

//SuperClasse
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;


}

Conta.prototype.sacar = function(valor){
    if (this.saldo < valor) {
        console.log(`Saldo Insuficiente: ${this.saldo}`)
        return;
    };
    
    this.saldo -= valor; 
    this.verSaldo();   
};
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta} | ` + 
    `Saldo: R$${this.saldo.toFixed(2)}`
    );
};

const conta1 = new Conta(11, 22, 10);
console.log(conta1);
conta1.depositar(11);
conta1.sacar(20);
conta1.sacar(20);


function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;

}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo Insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

const contaCorrente01 = new CC(11, 22, 0, 100);
contaCorrente01.depositar(10);
contaCorrente01.sacar(90);

function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);

}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cp = new CP(12, 33, 0);
console.log(cp);
cp.depositar(10);
console.log(cp);



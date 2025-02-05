//Polimorfismo: criando uma superClasse conta que implementa classe Conta corrente e Conta poupança

//Agencia, conta e saldo

//SuperClasse Conta -> Construtor -> base
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if (this.saldo >= valor) {
        this.saldo -= valor;
    }else {
        console.log(`Saldo Insuficiente`);
        this.verSaldo();
    }
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
};

Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo = R$${this.saldo.toFixed(2)}`);
};

const conta01 = new Conta('0123', '4567', 100);
console.log(conta01);
conta01.sacar(101);
conta01.depositar(20);
conta01.sacar(10);
conta01.verSaldo();


function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.contructor = ContaCorrente;
/* Conta para validação dos dígitos verificadores
705.484.450-52

705484450
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0 40 28 48  20 16 15 0 = (soma) = 237

11 - (237 % 11) = 5 (primeiro dígito)
Se o dígito calculado for > 9, é considerado 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2 
77 0  45 32 56 24 20 20 0  10 = (soma) = 284

11 - (284 % 11) = 2 (segundo dígito)
Se o dígito calculado for > 9, é considerado 0

se CPFOriginal === CPFGerado -> cpf válido

*/

//cria objeto cpf e limpa
function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function () {
            return cpfEnviado.replace(/\D+/g, '');
        }
    })
}

//validações, tirando os dígitos verificadores, virando array comparando o cpf original com o cpf gerado
ValidaCPF.prototype.valida = function() {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0,-2);
    const dig1 = this.criaDigito(cpfParcial);
    const dig2 = this.criaDigito(cpfParcial + dig1);
    

    const novoCPF = cpfParcial + dig1 + dig2;
    
    return novoCPF === this.cpfLimpo;
};

//criando os dígitos verificadores e validando 
ValidaCPF.prototype.criaDigito = function(cpfParcial) {
   const cpfArray = Array.from(cpfParcial);
   let regressivo = cpfArray.length + 1;

   const total = cpfArray.reduce((ac, val) => {
    ac += (regressivo * Number(val)); 
    regressivo--;
    return ac;
   }, 0);

   const  digito = 11 - (total % 11);
   digito > 9? digito = 0:digito;
   return String(digito); 
};

//verificação de sequencia
ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};


const cpf = new ValidaCPF('705.484.450-52');


console.log(cpf.valida() == true? 'CPF Válido!' : 'CPF Inválido!');


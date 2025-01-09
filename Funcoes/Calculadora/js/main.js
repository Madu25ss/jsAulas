//com Factory Function
function criaCalculadora() {

    return {
        display: document.querySelector('.display'),
        
        inicia() {
            //alert('calculadora iniciada');
            this.btnClick();
            this.enter();
        },

        //nao funciona, não retorna a conta certa, arrumar 
        enter() {
            document.addEventListener('keypress', (e) => {
                if (e.keyCode == 13) {
                    console.log('aaaa');
                    this.fazConta(); 
                }
            });
        },

        fazConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida.');
                    return;
                } else {
                    this.display.value = conta;
                }

                
            } catch (error) {
                alert('Conta Inválida.');
                return;
            }
        },

        apagarUm() {
            //slice 0,-1 -> tamanho da string -1 
            this.display.value = this.display.value.slice(0, -1);
        },

        clearDisplay() {
            this.display.value = '';
            this.display.focus();
        },


        btnClick() {
            //Arrow function (e) => não deixa o this trocar de valor
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('btnNum')) {
                    this.btnDisplay(el.innerText);
                }

                if (el.classList.contains('btnClear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btnDel')) {
                    this.apagarUm();
                }

                if (el.classList.contains('btnEq')) {
                    this.fazConta();
                }

            });//.bind(this));// o this dentro desse if usa o Document como referência, .bind(this) indica que a referência de this que deve ser usada é a que ta no this.btnClick(). 

        },

        btnDisplay(valor) {
            this.display.value += valor;
            console.log(this.display.value);
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
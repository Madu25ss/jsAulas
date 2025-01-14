function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaClicks();
        this.capturaEnter();
    }

    this.capturaEnter = () => {
        document.addEventListener('keypress', e => {
            e.preventDefault();
            if (e.keyCode === 13) this.fazConta();
        });
    }

    this.capturaClicks = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btnNum')) this.btnDisplay(el.innerText);
            if (el.classList.contains('btnClear'))this.clearDisplay();
            if (el.classList.contains('btnDel')) this.deleteNum()
            if (el.classList.contains('btnEq')) this.fazConta();
        });
    }

  
    this.btnDisplay = (valor) => this.display.value += valor;

    this.clearDisplay = () => {
        this.display.value = '';
        this.display.focus();
    }

    this.deleteNum = () => this.display.value = this.display.value.slice(0, -1);

    this.fazConta = () => {
        let conta = this.display.value;
        try {
            conta = eval(conta);

            if (!conta) {
                alert('Conta Inválida.');
                return;
            } else this.display.value = conta;

        } catch (error) {
            alert('Conta Inválida.');
            return;
        }
    }
}
const calculadora = new Calculadora();
calculadora.inicia();
class Comum {
    static nome;
    static saldoSAC = [];
    static saldoSPC = [];
    static amortizacaoSAC = [];
    static amortizacaoSPC = [];
    static juroSAC = [];
    static juroSPC = [];
    static prestacaoSAC = [];
    static prestacaoSPC = [];

    static alimentarArray(index, saldoAtual, amortizacao, juro, prestacao) {
        if (this.getNome() === "SAC") {
            this.saldoSAC[index] = saldoAtual;
            this.amortizacaoSAC[index] = amortizacao;
            this.juroSAC[index] = juro;
            this.prestacaoSAC[index] = prestacao;
        } else if(this.getNome()==="SPC"){
            this.saldoSPC[index] =saldoAtual;
            this.amortizacaoSPC[index] =amortizacao;
            this.juroSPC[index] =juro;
            this.prestacaoSPC[index] = prestacao;
        }
    }
    constructor() {

    }

    static media(SAC, SPC) {
        return (SAC + SPC) / 2;
    }
    static calculeValorSaldoAtual(saldoAnterior, amortizacaoAtual) {
        return saldoAnterior - amortizacaoAtual;
    }
    static calculeValorJuros(saldoAnterior, taxaJuros) {
        return saldoAnterior * (taxaJuros / 100);
    }
    static calculeValorSaldoCarencia(vaiPagar, saldo, taxaJuros) {
        if (vaiPagar) {
            return saldo;
        }
        return Number.parseFloat(saldo) + Number.parseFloat(calculeValorJuros(saldo, taxaJuros));
    }
    static calculeValorJurosCarencia(vaiPagar, saldoAnterior, taxaJuros) {
        if (vaiPagar) {
            return Comum.calculeValorJuros(saldoAnterior, taxaJuros);
        }
        return 0.00;
    }
    static setNome(nome) {
        this.nome = nome;
    }
    static getNome() {
        return this.nome;
    }
    static nomeTabela(vaiPagar, numeroCarencia) {
        let texto = "";
        if (numeroCarencia > 0) {
            texto += ' com carencia de ' + numeroCarencia + ' meses';
            if (vaiPagar) {
                texto += " e com pagamento de juros";
            } else {
                texto += " com Juros Capitalizados e Acrescidos ao Saldo Devedor. ";
            }
        } else {
            texto += " sem carencia";
        }

        return this.getNome() + texto;
    }

    static getSaldo(index){
        if (this.getNome()==="SAC") {
            return this.saldoSAC[index];
        } else if (this.getNome()==="SPC") {
            return this.saldoSPC[index];
        }
    }
    static getAmortizacao(index){
        if (this.getNome()==="SAC") {
            return this.amortizacaoSAC[index];
        } else if (this.getNome()==="SPC") {
            return this.amortizacaoSPC[index];
        }
    }
    static getJuro(index){
        if (this.getNome()==="SAC") {
            return this.juroSAC[index];
        } else if (this.getNome()==="SPC") {
            return this.juroSPC[index];
        }
    }
    static getPrestacao(index){
        if (this.getNome()==="SAC") {
            return this.prestacaoSAC[index];
        } else if (this.getNome()==="SPC") {
            return this.prestacaoSPC[index];
        }
    }
    static capitalizadojuros(){
        let juros;
        return juros;
    }

    
}
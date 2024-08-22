class Comum{
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
        } else if (this.getNome() === "SPC") {
            this.saldoSPC[index] = saldoAtual;
            this.amortizacaoSPC[index] = amortizacao;
            this.juroSPC[index] = juro;
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
    static calculeValorSaldoCarencia(saldo, taxaJuros) {
        let tipoCarencia = Validacao.valorSelecionadoTipoCarencia();
        if (tipoCarencia === "PJ") {
            return Number.parseFloat(saldo);
        } else if (tipoCarencia === "JCASD") {
            return Number.parseFloat(saldo) + Number.parseFloat(this.calculeValorJuros(saldo, taxaJuros));
        } else {
            return Number.parseFloat(saldo);
        }

    }
    static calculeValorJurosCarencia(saldoAnterior, taxaJuros) {
        let tipoCarencia = Validacao.valorSelecionadoTipoCarencia();
        if (tipoCarencia === "PJ") {
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
    static nomeTabela(numeroCarencia) {
        let texto = "";
        if (numeroCarencia > 0) { 
            let tipoCarencia = Validacao.valorSelecionadoTipoCarencia();
            texto += ' com carencia de ' + numeroCarencia + ' meses';
            switch (tipoCarencia) {
                case "PJ":
                    texto += " e com Pagamento de Juros";
                    break;
                case "CJ":
                    if (this.getNome() === "SAC") {
                        texto += " e  com Capitalização de Juros";
                        break;
                    } else {
                        return "Não existe tabela para modelo " + this.getNome();
                    }
                case "JCASD":
                    texto += " com Juros Capitalizados e Acrescidos ao Saldo Devedor. ";
                    break;
            }
        } else {
            texto += " sem carencia";
        }

        return this.getNome() + texto;
    }

    static getSaldo(index) {
        if (this.getNome() === "SAC") {
            return this.saldoSAC[index];
        } else if (this.getNome() === "SPC") {
            return this.saldoSPC[index];
        }
    }
    static getAmortizacao(index) {
        if (this.getNome() === "SAC") {
            return this.amortizacaoSAC[index];
        } else if (this.getNome() === "SPC") {
            return this.amortizacaoSPC[index];
        }
    }
    static getJuro(index) {
        if (this.getNome() === "SAC") {
            return this.juroSAC[index];
        } else if (this.getNome() === "SPC") {
            return this.juroSPC[index];
        }
    }
    static getPrestacao(index) {
        if (this.getNome() === "SAC") {
            return this.prestacaoSAC[index];
        } else if (this.getNome() === "SPC") {
            return this.prestacaoSPC[index];
        }
    }
    static capitalizadojuros(carencia,taxaJuros) {
        let juros =(((1 + (taxaJuros / 100)) ** (carencia + 1))-1);
        let element=1;
        for (let index = 0; index<=carencia; index++) {
            element = element *(1 +(taxaJuros / 100));
            
        }
       
        return Number.parseFloat(juros);
    }


}
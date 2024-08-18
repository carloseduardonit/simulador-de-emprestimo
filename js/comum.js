class Comum {
    static nome;
    static prestacaoSAC = [];
    static prestacaoSPC = [];
    static juroSAC = [];
    static juroSPC = [];
    static amortizacaoSAC = [];
    static amortizacaoSPC = [];
    
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
    static setNome(nome){
        this.nome = nome;
    }
    static getNome() {
        return this.nome;
    }
    static nomeTabela(vaiPagar, numeroCarencia) {
        let texto = "";
        if (numeroCarencia > 0) {
            texto += ' com carencia de '+ numeroCarencia +' meses';
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
}
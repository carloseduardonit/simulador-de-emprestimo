class SAM extends Comum {
    
    constructor() {
        super();
    }

    static calculeValorJuros(prestacaoSAC,prestacaoSPC){
        return this.media(prestacaoSAC,prestacaoSPC);
    }
    static calculeValorAmotização(prestacaoSAC, prestacaoSPC) {
        return this.media(prestacaoSAC, prestacaoSPC);
    }

    static calculeValordaPrestacao(prestacaoSAC, prestacaoSPC) {
        return this.media(prestacaoSAC, prestacaoSPC);
    }

    static deboxe() {
        let tabelaHTML = document.getElementById("tabelaSAM");
        let imagem = '<img src="https://media.tenor.com/d_lG-IlpmvcAAAAM/ahmetbb.gif" width="262.5" height="400" alt="a painting of a woman in a blue dress with flowers in her hair" loading="lazy">';
        tabelaHTML.innerHTML = imagem;
    }

    static tabela(vaiPagar, valorEmprestimoHTML, taxaJurosHTML, numeroCarenciaHTML, numeroPrestacaoHTML) {
        // hTML
        this.setNome("SAM");
        let tabelaHTML = document.getElementById('tabelaSAM');
        // Manipular dados
    
        let taxaJuros = taxaJurosHTML;
        let carencia = numeroCarenciaHTML;
        let numberPrestacao = numeroPrestacaoHTML;
        // preenchimento de variaveis
        let saldo = valorEmprestimoHTML;
        let amortizacao = 0.00;
        let juros = 0.00;
        let prestacao = 0.00;
    
        let mes = 0;
        let totalAmortizacao = 0.00;
        let totalJuros = 0.00;
        let totalPrestacao = 0.00;
        let saldoAtual, saldoAnterior;
        let texto = cabelho(SAM.nomeTabela(vaiPagar,carencia))
            + alimentarTabela(mes, saldo, amortizacao, juros, prestacao);
    
        if (carencia > 0) {
            juros = SAM.calculeValorJurosCarencia(vaiPagar, saldo, taxaJuros);
            saldoAtual = SAM.calculeValorSaldoCarencia(vaiPagar, saldo, taxaJuros);
            saldoAnterior = saldoAtual;
            for (var i = mes + 1; i <= carencia; i++) {
                mes = i;
                prestacao = SAM.calculeValordaPrestacao(this.prestacaoSAC[i],this.prestacaoSPC[i]);
                texto += alimentarTabela(mes, saldoAtual, amortizacao, juros, prestacao);
                saldoAnterior = saldoAtual;
                juros = SAM.calculeValorJurosCarencia(vaiPagar, saldoAnterior, taxaJuros);
                saldoAtual = SAM.calculeValorSaldoCarencia(vaiPagar, saldoAnterior, taxaJuros);
                totalAmortizacao += amortizacao;
                totalJuros += juros;
                totalPrestacao += prestacao;
            }
        }
    
    
        if (numberPrestacao > 0) {
    
            let saldoAtual = saldo - amortizacao;
            let saldoAnterior = saldo;
            juros = SAM.calculeValorJuros(saldo, taxaJuros);
            for (var i = (carencia + 1); i <= (carencia + numberPrestacao); i++) {
                mes = i;
                texto += alimentarTabela(mes, saldoAtual, amortizacao, juros, prestacao);
                totalAmortizacao += amortizacao;
                totalJuros += juros;
                totalPrestacao += prestacao;
                saldoAnterior = saldoAtual;
                saldoAtual -= amortizacao;
                juros = SAM.calculeValorJuros(saldoAnterior, taxaJuros);
    
            }
        }
        texto += linhaTotal(totalAmortizacao, totalJuros, totalPrestacao, taxaJuros)
        tabelaHTML.innerHTML = texto;
    }
}
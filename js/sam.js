class SAM extends Comum {

    constructor() {
        super();
    }
    static calculeValorSaldoAtual(prestacaoSAC, prestacaoSPC) {
        return this.media(prestacaoSAC, prestacaoSPC);
    }
    static calculeValorJuros(prestacaoSAC, prestacaoSPC) {
        return this.media(prestacaoSAC, prestacaoSPC);
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
        let texto = cabelho(SAM.nomeTabela(vaiPagar, carencia))
            + alimentarTabela(mes, saldo, amortizacao, juros, prestacao);




        if (numberPrestacao > 0) {
            juros = SAM.calculeValorJuros(saldoAnterior, taxaJuros);
            for (var index = 1; index <= (carencia + numberPrestacao); index++) {
                mes = index;
                saldoAtual = SAM.calculeValorSaldoAtual(SAC.getSaldo(index), SPC.getSaldo(index));
                amortizacao = SAM.calculeValorAmotização(SAC.getAmortizacao(index), SPC.getAmortizacao(index));
                juros = SAM.calculeValorJuros(SAC.getJuro(index), SPC.getJuro(index));
                prestacao = SAM.calculeValordaPrestacao(SAC.getPrestacao(index), SPC.getPrestacao(index));
                texto += alimentarTabela(mes, saldoAtual, amortizacao, juros, prestacao);
                totalAmortizacao += amortizacao;
                totalJuros += juros;
                totalPrestacao += prestacao;

            }
        }
        texto += linhaTotal(totalAmortizacao, totalJuros, totalPrestacao, taxaJuros)
        tabelaHTML.innerHTML = texto;
    }
}
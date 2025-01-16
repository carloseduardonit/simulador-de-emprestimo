class SAC extends Comum {
    nome = "SAC";
    /**
     * Cria uma instância da classe.
     * Chama o construtor da classe pai.
     */
    constructor() {
        super();
    }

    static calculeValorAmotização(numeroPrestacao, valorEmprestimo) {
        return Number.parseFloat((valorEmprestimo / numeroPrestacao));
    }
    static calculeValordaPrestacao(amortizacao, juros) {
        return Number.parseFloat((amortizacao + juros));
    }
    static calculeValorJurosd(index, saldoAnterior, taxaJuros) {
        let carencia = converterHTMLtoInt(document.getElementById('numeroCarencia'));
        let tipoCarencia = Validacao.valorSelecionadoTipoCarencia();

        if (this.getNome() === "SAC" && tipoCarencia === "CJ"&&carencia>0) {
            return saldoAnterior * this.capitalizadojuros(carencia, taxaJuros);
        }
        return super.calculeValorJuros(saldoAnterior, taxaJuros);
    }
    static deboxe() {
        let tabelaHTML = document.getElementById("tabelaSAC");
        let imagem = '<img src="https://media.tenor.com/nR9iDKkkHvMAAAAM/deboche.gif" width="400" height="400" alt="a close up of a person s face with a smiley face on their head ." loading="lazy">';
        tabelaHTML.innerHTML = imagem;
    }

    static tabela(valorEmprestimoHTML, taxaJurosHTML, numeroCarenciaHTML, numeroPrestacaoHTML) {
        this.setNome("SAC");
        let tabelaHTML = document.getElementById('tabelaSAC');
        // Manipular dados
        let taxaJuros = taxaJurosHTML;
        let carencia = numeroCarenciaHTML;
        let numberPrestacao = numeroPrestacaoHTML;
        // preenchimento de variaveis
        let saldo = 0;
        saldo = valorEmprestimoHTML;
        let amortizacao = 0.00;
        let juros = 0.00;
        let prestacao = 0.00;

        let mes = 0;
        let totalAmortizacao = 0.00;
        let totalJuros = 0.00;
        let totalPrestacao = 0.00;
        let saldoAtual, saldoAnterior;
        SAC.alimentarArray(0, saldo, amortizacao, juros, prestacao);
        let texto = cabelho(SAC.nomeTabela(carencia))
            + alimentarTabela(mes, saldo, amortizacao, juros, prestacao);

        if (carencia > 0) {
            juros = SAC.calculeValorJurosCarencia(saldo, taxaJuros);
            saldoAtual = SAC.calculeValorSaldoCarencia(saldo, taxaJuros);
            saldoAnterior = saldoAtual;
            for (var index = mes + 1; index <= carencia; index++) {
                mes = index;
                prestacao = SAC.calculeValordaPrestacao(amortizacao, juros);
                SAC.alimentarArray(index, saldoAtual, amortizacao, juros, prestacao);
                texto += alimentarTabela(mes, saldoAtual, amortizacao, juros, prestacao);
                juros = SAC.calculeValorJurosCarencia(saldoAnterior, taxaJuros);
                saldoAnterior = saldoAtual;
                saldoAtual = SAC.calculeValorSaldoCarencia(saldoAnterior, taxaJuros);
                totalAmortizacao += amortizacao;
                totalJuros += juros;
                totalPrestacao += prestacao;
            }
        }
        else if (carencia === 0) {
            saldoAtual = saldo;
        }

        if (numberPrestacao > 0) {
            saldoAnterior = SAC.getSaldo(carencia);
            amortizacao = SAC.calculeValorAmotização(numberPrestacao, saldoAnterior);
            saldoAtual = saldoAnterior - amortizacao;
            if (carencia > 0) {
                juros = SAC.calculeValorJurosd(carencia + 1, saldoAnterior, taxaJuros);
            } else {
                juros = super.calculeValorJuros(saldoAnterior, taxaJuros);
            }

            for (var index = (carencia + 1); index <= (carencia + numberPrestacao); index++) {
                mes = index;
                prestacao = SAC.calculeValordaPrestacao(amortizacao, juros);
                SAC.alimentarArray(index, saldoAtual, amortizacao, juros, prestacao);
                texto += alimentarTabela(mes, saldoAtual, amortizacao, juros, prestacao);
                totalAmortizacao += amortizacao;
                totalJuros += juros;
                totalPrestacao += prestacao;
                saldoAnterior = saldoAtual;
                saldoAtual -= amortizacao;
                juros = SAC.calculeValorJuros(saldoAnterior, taxaJuros);

            }
        }
        texto += linhaTotal(totalAmortizacao, totalJuros, totalPrestacao, taxaJuros)
        tabelaHTML.innerHTML = texto;
    }
}
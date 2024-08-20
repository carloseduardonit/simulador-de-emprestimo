class SAC extends Comum {
    nome = "SAC";
    constructor() {
        super();
    }

    static calculeValorAmotização(numeroPrestacao, valorEmprestimo) {
        return Number.parseFloat((valorEmprestimo / numeroPrestacao));
    }
    static calculeValordaPrestacao(amortizacao, juros) {
        return Number.parseFloat((amortizacao + juros));
    }
    static deboxe() {
        let tabelaHTML = document.getElementById("tabelaSAC");
        let imagem = '<img src="https://media.tenor.com/nR9iDKkkHvMAAAAM/deboche.gif" width="400" height="400" alt="a close up of a person s face with a smiley face on their head ." loading="lazy">';
        tabelaHTML.innerHTML = imagem;
    }

    static tabela(vaiPagar, valorEmprestimoHTML, taxaJurosHTML, numeroCarenciaHTML, numeroPrestacaoHTML) {
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

        let texto = cabelho(SAC.nomeTabela(vaiPagar, carencia))
            + alimentarTabela(mes, saldo, amortizacao, juros, prestacao);

        if (carencia > 0) {
            switch (Validacao.valorSelecionadoTipoCarencia()) {
                case "PJ":
                    juros = SAC.calculeValorJurosCarencia(vaiPagar, saldo, taxaJuros);
                    break;
                case "CJ":
                    break;
                case "JCASD":
                    break;
                default:
                    break;
            }
            
            saldoAtual = SAC.calculeValorSaldoCarencia(vaiPagar, saldo, taxaJuros);
            saldoAnterior = saldoAtual;
            for (var index = mes + 1; index <= carencia; index++) {
                mes = index;
                prestacao = SAC.calculeValordaPrestacao(amortizacao, juros);
                SAC.alimentarArray(index, saldoAtual, amortizacao, juros, prestacao);
                texto += alimentarTabela(mes, saldoAtual, amortizacao, juros, prestacao);
                juros = SAC.calculeValorJurosCarencia(vaiPagar, saldoAnterior, taxaJuros);
                saldoAnterior = saldoAtual;
                saldoAtual = SAC.calculeValorSaldoCarencia(vaiPagar, saldoAnterior, taxaJuros);
                totalAmortizacao += amortizacao;
                totalJuros += juros;
                totalPrestacao += prestacao;
            }
        }
        else if (carencia === 0) {
            saldoAtual = saldo;
        }

        if (numberPrestacao > 0) {
            amortizacao = SAC.calculeValorAmotização(numberPrestacao, saldoAtual);
            saldoAnterior = saldoAtual;
            saldoAtual = saldoAnterior - amortizacao;

            juros = SAC.calculeValorJuros(saldo, taxaJuros);
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
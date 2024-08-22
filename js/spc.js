class SPC extends Comum {
    constructor() {
        super();
    }


    static calculeValordaPrestacao(saldo, taxaJuros, numberPrestacao) {
        let juros = taxaJuros / 100;
        let fatorValorPresente = (((1 - (1 + juros) ** (-numberPrestacao))) / juros);
        return Number.parseFloat(saldo / fatorValorPresente);
    }


    static calculeValorAmotização(prestacao, juros) {
        return Number.parseFloat((prestacao - juros));
    }


    static deboxe() {
        let tabelaHTML = document.getElementById("tabelaSPC");
        let imagem = '<img src="https://media1.tenor.com/m/2mHG39xCnssAAAAC/carinha-de-anjo-cda.gif" width="400" height="400" alt="a little girl with a crown on her head is eating a candy" style="max-width: 833px;">';
        tabelaHTML.innerHTML = imagem;
    }

    static tabela(valorEmprestimoHTML, taxaJurosHTML, numeroCarenciaHTML, numeroPrestacaoHTML) {
        // hTML
        SPC.setNome("SPC");
        let tabelaHTML = document.getElementById('tabelaSPC');
        // Manipular dados
        let valorEmprestimo = valorEmprestimoHTML;
        let taxaJuros = taxaJurosHTML;
        let carencia = numeroCarenciaHTML;
        let numberPrestacao = numeroPrestacaoHTML;
        // preenchimento de variaveis
        let saldo = valorEmprestimo;
        let amortizacao = 0.00;
        let juros = 0.00;
        let prestacao = 0.00;

        let mes = 0;
        let totalAmortizacao = 0.00;
        let totalJuros = 0.00;
        let totalPrestacao = 0.00;
        let saldoAtual, saldoAnterior;
        let texto;
        if (Validacao.nãoExibirTabela(carencia,SPC.getNome())) {
            texto = "<p>" + SPC.nomeTabela(carencia) + "</p>";
            tabelaHTML.innerHTML = texto;
        } else {
            texto = cabelho(SPC.nomeTabela(carencia))
                + alimentarTabela(mes, saldo, amortizacao, juros, prestacao);

            if (carencia > 0) {
                juros = SPC.calculeValorJurosCarencia(saldo, taxaJuros);
                saldoAtual = SPC.calculeValorSaldoCarencia(saldo, taxaJuros);

                for (var index = mes + 1; index <= carencia; index++) {
                    mes = index;
                    prestacao = SAC.calculeValordaPrestacao(amortizacao, juros);
                    SPC.alimentarArray(index, saldoAtual, amortizacao, juros, prestacao);
                    texto += alimentarTabela(mes, saldoAtual, amortizacao, juros, prestacao);
                    saldoAnterior = saldoAtual;
                    juros = SPC.calculeValorJurosCarencia(saldoAnterior, taxaJuros);
                    saldoAtual = SPC.calculeValorSaldoCarencia(saldoAnterior, taxaJuros);
                    totalAmortizacao += amortizacao;
                    totalJuros += juros;
                    totalPrestacao += prestacao;
                }
            } else if (carencia === 0) {
                saldoAtual = saldo;
            }

            if (numberPrestacao > 0) {
                saldoAnterior = saldoAtual;
                saldoAtual = saldoAnterior - amortizacao;
                juros = SPC.calculeValorJuros(valorEmprestimo, taxaJuros);
                prestacao = SPC.calculeValordaPrestacao(saldoAnterior, taxaJuros, numberPrestacao);
                for (var index = (carencia + 1); index <= (carencia + numberPrestacao); index++) {
                    mes = index;
                    saldoAnterior = saldoAtual;
                    juros = SPC.calculeValorJuros(saldoAnterior, taxaJuros);
                    amortizacao = SPC.calculeValorAmotização(prestacao, juros);
                    saldoAtual = SPC.calculeValorSaldoAtual(saldoAnterior, amortizacao);
                    SPC.alimentarArray(index, saldoAtual, amortizacao, juros, prestacao);
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
}
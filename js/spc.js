class SPC extends Comum {
    /**
     * Cria uma instância da classe.
     * Chama o construtor da classe pai.
     */
    constructor() {
        super();
    }

    /**
     * Calcula o valor da prestação de um empréstimo.
     *
     * @param {number} saldo - O saldo restante do empréstimo.
     * @param {number} taxaJuros - A taxa de juros como porcentagem.
     * @param {number} numberPrestacao - O número de prestações.
     * @returns {number} O valor de cada prestação.
     */
    static calculeValordaPrestacao(saldo, taxaJuros, numberPrestacao) {
        let juros = taxaJuros / 100;
        let fatorValorPresente = (((1 - (1 + juros) ** (-numberPrestacao))) / juros);
        return Number.parseFloat(saldo / fatorValorPresente);
    }


    /**
     * Calcula o valor da amortização.
     *
     * @param {number} prestacao - O valor total da prestação.
     * @param {number} juros - A parte de juros da prestação.
     * @returns {number} O valor da amortização, que é o valor da prestação menos os juros.
     */
    static calculeValorAmotização(prestacao, juros) {
        return Number.parseFloat((prestacao - juros));
    }


    /**
     * Substitui o conteúdo HTML interno do elemento com id "tabelaSPC" por uma imagem.
     * A imagem é de uma menina com uma coroa na cabeça comendo um doce.
     * A imagem tem uma largura de 400px, altura de 400px e uma largura máxima de 833px.
     */
    static deboxe() {
        let tabelaHTML = document.getElementById("tabelaSPC");
        let imagem = '<img src="https://media1.tenor.com/m/2mHG39xCnssAAAAC/carinha-de-anjo-cda.gif" width="400" height="400" alt="a little girl with a crown on her head is eating a candy" style="max-width: 833px;">';
        tabelaHTML.innerHTML = imagem;
    }

    /**
     * Gera e exibe uma tabela de amortização de empréstimo.
     *
     * @param {number} valorEmprestimoHTML - O valor do empréstimo.
     * @param {number} taxaJurosHTML - A taxa de juros.
     * @param {number} numeroCarenciaHTML - O número de períodos de carência.
     * @param {number} numeroPrestacaoHTML - O número de prestações.
     */
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
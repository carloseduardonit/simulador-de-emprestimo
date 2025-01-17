class SAM extends Comum {
/**
     * Cria uma instância da classe.
     * Chama o construtor da classe pai.
     */
    constructor() {
        super();
    }
    
    /**
     * Calcula o valor do saldo atual com base nas prestações SAC e SPC.
     *
     * @param {number} prestacaoSAC - O valor da prestação SAC.
     * @param {number} prestacaoSPC - O valor da prestação SPC.
     * @returns {number} O valor calculado do saldo atual.
     */
    static calculeValorSaldoAtual(prestacaoSAC, prestacaoSPC) {
        return this.media(prestacaoSAC, prestacaoSPC);
    }

    /**
     * Calcula o valor dos juros com base nas prestações SAC e SPC.
     *
     * @param {number} prestacaoSAC - O valor da prestação SAC.
     * @param {number} prestacaoSPC - O valor da prestação SPC.
     * @returns {number} O valor calculado dos juros.
     */
    static calculeValorJuros(prestacaoSAC, prestacaoSPC) {
        return this.media(prestacaoSAC, prestacaoSPC);
    }

    /**
     * Calcula o valor da amortização com base nas prestações SAC e SPC.
     *
     * @param {number} prestacaoSAC - O valor da prestação SAC.
     * @param {number} prestacaoSPC - O valor da prestação SPC.
     * @returns {number} O valor calculado da amortização.
     */
    static calculeValorAmotização(prestacaoSAC, prestacaoSPC) {
        return this.media(prestacaoSAC, prestacaoSPC);
    }

    /**
     * Calcula o valor da prestação pela média das prestações SAC e SPC.
     *
     * @param {number} prestacaoSAC - O valor da prestação SAC.
     * @param {number} prestacaoSPC - O valor da prestação SPC.
     * @returns {number} O valor médio das duas prestações.
     */
    static calculeValordaPrestacao(prestacaoSAC, prestacaoSPC) {
        return this.media(prestacaoSAC, prestacaoSPC);
    }

    /**
     * Substitui o conteúdo HTML interno do elemento com o ID "tabelaSAM" por uma imagem.
     * A imagem é carregada de forma preguiçosa e possui dimensões e texto alternativo especificados.
     */
    static deboxe() {
        let tabelaHTML = document.getElementById("tabelaSAM");
        let imagem = '<img src="https://media.tenor.com/d_lG-IlpmvcAAAAM/ahmetbb.gif" width="262.5" height="400" alt="a painting of a woman in a blue dress with flowers in her hair" loading="lazy">';
        tabelaHTML.innerHTML = imagem;
    }

    /**
     * Gera e exibe uma tabela de amortização de empréstimo.
     *
     * @param {number} valorEmprestimoHTML - O valor inicial do empréstimo.
     * @param {number} taxaJurosHTML - A taxa de juros.
     * @param {number} numeroCarenciaHTML - O número de períodos de carência.
     * @param {number} numeroPrestacaoHTML - O número de prestações.
     */
    static tabela(valorEmprestimoHTML, taxaJurosHTML, numeroCarenciaHTML, numeroPrestacaoHTML) {
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
        let texto;
        if (Validacao.nãoExibirTabela(carencia,SAM.getNome())) {
            texto = "<p>" + SAM.nomeTabela(carencia) + "</p>";
            tabelaHTML.innerHTML = texto;
        } else {
        texto = cabelho(SAM.nomeTabela(carencia))
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
}
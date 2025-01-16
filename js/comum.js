/**
 * A classe Comum fornece métodos estáticos para manipulação de saldos, amortizações, juros e prestações
 * de empréstimos, bem como cálculos relacionados a esses valores.
 */
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

    /**
     * Atualiza os arrays de saldo, amortização, juros e prestação com base no índice fornecido.
     *
     * @param {number} index - O índice no qual os valores serão atualizados.
     * @param {number} saldoAtual - O saldo atual a ser atualizado.
     * @param {number} amortizacao - O valor da amortização a ser atualizado.
     * @param {number} juro - O valor dos juros a ser atualizado.
     * @param {number} prestacao - O valor da prestação a ser atualizado.
     */
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

    /**
     * Cria uma instância da classe.
     */
    constructor() {

    }

    /**
     * Calcula a média de dois números.
     *
     * @param {number} SAC - O primeiro número.
     * @param {number} SPC - O segundo número.
     * @returns {number} A média dos dois números.
     */
    static media(SAC, SPC) {
        return (SAC + SPC) / 2;
    }

    /**
     * Calcula o valor do saldo atual subtraindo a amortização atual do saldo anterior.
     *
     * @param {number} saldoAnterior - O saldo anterior.
     * @param {number} amortizacaoAtual - O valor da amortização atual.
     * @returns {number} O valor do saldo atual calculado.
     */
    static calculeValorSaldoAtual(saldoAnterior, amortizacaoAtual) {
        return saldoAnterior - amortizacaoAtual;
    }
    
    /**
     * Calcula o valor dos juros com base no saldo anterior e na taxa de juros.
     *
     * @param {number} saldoAnterior - O saldo anterior.
     * @param {number} taxaJuros - A taxa de juros como uma porcentagem.
     * @returns {number} O valor dos juros calculados.
     */
    static calculeValorJuros(saldoAnterior, taxaJuros) {
        return saldoAnterior * (taxaJuros / 100);
    }

    /**
     * Calcula o valor do saldo considerando o tipo de período de carência.
     *
     * @param {number} saldo - O saldo inicial.
     * @param {number} taxaJuros - A taxa de juros.
     * @returns {number} - O valor do saldo calculado.
     */
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
    
    /**
     * Calcula o valor dos juros durante o período de carência com base no saldo anterior e na taxa de juros.
     *
     * @param {number} saldoAnterior - O saldo anterior.
     * @param {number} taxaJuros - A taxa de juros.
     * @returns {number} O valor dos juros calculados se o tipo de carência for "PJ",
     * caso contrário 0.00.
     */
    static calculeValorJurosCarencia(saldoAnterior, taxaJuros) {
        let tipoCarencia = Validacao.valorSelecionadoTipoCarencia();
        if (tipoCarencia === "PJ") {
            return Comum.calculeValorJuros(saldoAnterior, taxaJuros);
        }
        return 0.00;
    }

    /**
     * Define o nome.
     * 
     * @param {string} nome - O nome a ser definido.
     */
    static setNome(nome) {
        this.nome = nome;
    }

    /**
     * Obtém o nome.
     * @returns {string} O nome.
     */
    static getNome() {
        return this.nome;
    }

    /**
     * Gera um nome de tabela com base no número de períodos de carência e tipo de carência.
     *
     * @param {number} numeroCarencia - O número de períodos de carência em meses.
     * @returns {string} O nome da tabela gerado com detalhes sobre o período de carência e tipo de pagamento.
     */
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

    /**
     * Recupera o saldo no índice especificado com base no tipo de empréstimo.
     * 
     * @param {number} index - O índice do saldo a ser recuperado.
     * @returns {number} O saldo no índice especificado.
     */
    static getSaldo(index) {
        if (this.getNome() === "SAC") {
            return this.saldoSAC[index];
        } else if (this.getNome() === "SPC") {
            return this.saldoSPC[index];
        }
    }

    /**
     * Recupera o valor da amortização com base no índice fornecido.
     * 
     * @param {number} index - O índice do valor da amortização a ser recuperado.
     * @returns {number} O valor da amortização no índice especificado.
     */
    static getAmortizacao(index) {
        if (this.getNome() === "SAC") {
            return this.amortizacaoSAC[index];
        } else if (this.getNome() === "SPC") {
            return this.amortizacaoSPC[index];
        }
    }

    /**
     * Recupera a taxa de juros com base no índice fornecido.
     * A taxa de juros é determinada pelo tipo de empréstimo, seja "SAC" ou "SPC".
     *
     * @param {number} index - O índice da taxa de juros a ser recuperada.
     * @returns {number} A taxa de juros correspondente ao índice fornecido.
     */
    static getJuro(index) {
        if (this.getNome() === "SAC") {
            return this.juroSAC[index];
        } else if (this.getNome() === "SPC") {
            return this.juroSPC[index];
        }
    }
    
    /**
     * Recupera a prestação do empréstimo com base no índice fornecido.
     * 
     * @param {number} index - O índice da prestação a ser recuperada.
     * @returns {number} O valor da prestação no índice especificado.
     */
    static getPrestacao(index) {
        if (this.getNome() === "SAC") {
            return this.prestacaoSAC[index];
        } else if (this.getNome() === "SPC") {
            return this.prestacaoSPC[index];
        }
    }

    /**
     * Calcula os juros capitalizados durante um determinado período com uma taxa de juros especificada.
     *
     * @param {number} carencia - O número de períodos (por exemplo, meses ou anos) para os quais os juros são calculados.
     * @param {number} taxaJuros - A taxa de juros como uma porcentagem.
     * @returns {number} - Os juros capitalizados calculados.
     */
    static capitalizadojuros(carencia, taxaJuros) {
        let juros = (((1 + (taxaJuros / 100)) ** (carencia + 1)) - 1);
        let element = 1;
        for (let index = 0; index <= carencia; index++) {
            element = element * (1 + (taxaJuros / 100));

        }
        return Number.parseFloat(juros);
    }
}
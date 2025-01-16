/**
 * Formata um valor dado como uma string de moeda em Real Brasileiro (BRL).
 *
 * @param {number|string} valor - O valor a ser formatado. Pode ser um número ou uma string.
 * @returns {string} - A string de moeda formatada no local 'pt-BR'. 
 * Se a entrada não for um número, retorna a entrada como está.
 */
function formatarValor(valor) {
    if (isNaN(valor)) {
        return valor;
    }
    return Number.parseFloat(valor)
    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}


/**
 * Converte o valor de um elemento de entrada HTML para um número de ponto flutuante.
 *
 * @param {HTMLInputElement} valor - O elemento de entrada HTML cujo valor será convertido.
 * @returns {number} A representação numérica de ponto flutuante do valor de entrada.
 */
function converterHTMLtoFloat(valor) {
    return Number.parseFloat(valor.value);
}

/**
 * Converte o valor de um elemento de entrada HTML para um número inteiro.
 *
 * @param {HTMLInputElement} valor - O elemento de entrada HTML cujo valor será convertido.
 * @returns {number} A representação numérica inteira do valor de entrada.
 */
function converterHTMLtoInt(valor) {
    return Number.parseInt(valor.value);
}

/**
 * Alimenta a tabela HTML com os valores fornecidos para mês, saldo, amortização, juros e prestação.
 *
 * @param {number|string} mes - O mês atual ou uma string representando o mês.
 * @param {number} saldo - O saldo atual.
 * @param {number} amortizacao - O valor da amortização.
 * @param {number} juros - O valor dos juros.
 * @param {number} prestacao - O valor da prestação.
 * @returns {string} - A linha de tabela HTML gerada.
 */
function alimentarTabela(mes, saldo, amortizacao, juros, prestacao) {
    let carencia = converterHTMLtoInt(document.getElementById('numeroCarencia'));
    let texto = '<tr>' +
        '<th '+ecarencia(mes,carencia)+'>' + mes + '</th>' +
        '<th>' + formatarValor(saldo) + '</th>' +
        '<th>' + formatarValor(amortizacao) + '</th>' +
        '<th>' + formatarValor(juros) + '</th>' +
        '<th>' + formatarValor(prestacao) + '</th>' +
        '</tr>';
    return texto;
}

/**
 * Gera o cabeçalho da tabela HTML com o nome fornecido.
 *
 * @param {string} nome - O nome a ser exibido no cabeçalho da tabela.
 * @returns {string} - O cabeçalho da tabela HTML gerado.
 */
function cabelho(nome) {
    return '<table border="1" class = "simulacao" >' + '<tr><td colspan ="5">' + nome + '</td></tr>'
        + alimentarTabela('Mês', 'Saldo', 'Amortização', 'Juros', 'Prestação');
}


/**
 * Gera uma linha de tabela com a amortização total, juros totais, pagamento total e taxa de juros.
 *
 * @param {number} totalAmortizacao - O valor total da amortização.
 * @param {number} totalJuros - O valor total dos juros.
 * @param {number} totalPrestacao - O valor total do pagamento.
 * @param {number} taxaJuros - A taxa de juros por mês.
 * @returns {string} A string HTML representando a linha da tabela com os totais e a taxa de juros.
 */
function linhaTotal(totalAmortizacao, totalJuros, totalPrestacao, taxaJuros) {
    return '<tr><th colspan = "2">Total</th><th>'
        + formatarValor(totalAmortizacao) + '</th><th>'
        + formatarValor(totalJuros) + '</th><th>'
        + formatarValor(totalPrestacao) + '</th></tr>'
        + '<tr><th class = "preto" colspan = "3"></th><th colspan = "2">'
        + formatarTaxa(taxaJuros) + ' ao mês</th></tr>'
        + '</table>';
}

/**
 * Gera tabelas de amortização de empréstimos com base nos valores de entrada do usuário.
 * Recupera valores de elementos HTML, valida-os e, em seguida, gera
 * tabelas usando diferentes métodos de amortização (SAC, SPC, SAM).
 *
 * @function tabela
 */
function tabela() {
    let valorEmprestimoHTML = converterHTMLtoFloat(document.getElementById('valorEmprestimo'));
    let taxaJurosHTML = converterHTMLtoFloat(document.getElementById('taxaJuros'));
    let numeroCarenciaHTML = r(document.getElementById('numeroCarencia'));
    let numeroPrestacaoHTML = r(document.getElementById('numeroPrestacao'));
    if (Validacao.erroPreenchimento(valorEmprestimoHTML, taxaJurosHTML, numeroCarenciaHTML, numeroPrestacaoHTML)) {
        SAC.tabela(valorEmprestimoHTML, taxaJurosHTML, numeroCarenciaHTML, numeroPrestacaoHTML);
        SPC.tabela(valorEmprestimoHTML, taxaJurosHTML, numeroCarenciaHTML, numeroPrestacaoHTML);
        SAM.tabela(valorEmprestimoHTML, taxaJurosHTML, numeroCarenciaHTML, numeroPrestacaoHTML);
    }
}

/**
 * Formata uma taxa de imposto dada como uma string de porcentagem.
 *
 * @param {number|string} taxa - A taxa de imposto a ser formatada. Pode ser um número ou uma string.
 * @returns {string} A taxa de imposto formatada como uma string de porcentagem com quatro casas decimais.
 */
function formatarTaxa(taxa) {
    if (isNaN(taxa)) {
        return taxa;
    }
    return Number.parseFloat(taxa/100).toLocaleString('pt-BR', { style: 'percent', minimumFractionDigits: 4 });
}

/**
 * Determina a classe CSS a ser aplicada com base no mês e no número de períodos de carência.
 *
 * @param {number|string} mes - O mês atual ou uma string representando o mês.
 * @param {number} numeroCarencia - O número de períodos de carência.
 * @returns {string} A classe CSS a ser aplicada. 
 * Retorna uma string vazia se o mês for 0 ou "Mês".
 */
function ecarencia(mes, numeroCarencia) {
    if (mes === 0 || mes=== "Mês") {
        return "";
    }
    if (mes <= numeroCarencia) {
        return 'class = "thCarencia"';
    } else {
        return 'class = "thPrestacao"';
    }
}
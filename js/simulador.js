
function formatarValor(valor) {
    if (isNaN(valor)) {
        return valor;
    }
    return Number.parseFloat(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
function conveterHTMltoFloat(valor) {
    return Number.parseFloat(valor.value);
}
function conveterHTMltoInt(valor) {
    return Number.parseInt(valor.value);
}
function alimentarTabela(mes, saldo, amortizacao, juros, prestacao) {
    let carencia = conveterHTMltoInt(document.getElementById('numeroCarencia'));
    let texto = '<tr>' +
        '<th '+ecarencia(mes,carencia)+'>' + mes + '</th>' +
        '<th>' + formatarValor(saldo) + '</th>' +
        '<th>' + formatarValor(amortizacao) + '</th>' +
        '<th>' + formatarValor(juros) + '</th>' +
        '<th>' + formatarValor(prestacao) + '</th>' +
        '</tr>';
    return texto;
}
function cabelho(nome) {
    return '<table border="1" class = "simulacao" >' + '<tr><td colspan ="5">' + nome + '</td></tr>'
        + alimentarTabela('Mês', 'Saldo', 'Amortização', 'Juros', 'Prestação');
}
function linhaTotal(totalAmortizacao, totalJuros, totalPrestacao, taxaJuros) {
    return '<tr><th colspan = "2">Total</th><th>'
        + formatarValor(totalAmortizacao) + '</th><th>'
        + formatarValor(totalJuros) + '</th><th>'
        + formatarValor(totalPrestacao) + '</th></tr>'
        + '<tr><th colspan = "3"></th><th colspan = "2">'
        + taxaJuros + ' % ao mês</th></tr>'
        + '</table>';
}

function tabela() {
    let valorEmprestimoHTML = conveterHTMltoFloat(document.getElementById('valorEmprestimo'));
    let taxaJurosHTML = conveterHTMltoFloat(document.getElementById('taxaJuros'));
    let numeroCarenciaHTML = conveterHTMltoInt(document.getElementById('numeroCarencia'));
    let numeroPrestacaoHTML = conveterHTMltoInt(document.getElementById('numeroPrestacao'));

    if (Validacao.erroPreenchimento(valorEmprestimoHTML, taxaJurosHTML, numeroCarenciaHTML, numeroPrestacaoHTML)) {
        SAC.tabela(valorEmprestimoHTML, taxaJurosHTML, numeroCarenciaHTML, numeroPrestacaoHTML);
        SPC.tabela(valorEmprestimoHTML, taxaJurosHTML, numeroCarenciaHTML, numeroPrestacaoHTML);
        SAM.tabela(valorEmprestimoHTML, taxaJurosHTML, numeroCarenciaHTML, numeroPrestacaoHTML);
    }
    
}

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
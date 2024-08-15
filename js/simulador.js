class SimuladorEmprestimo {
    saldoSPC;
    saldoSAC;
    amortizacaoSPC;
    amortizacaoSAC;
    jurosSPC;
    jurosSAC;
    prestacaoSPC;
    prestacaoSAC;
    totalizador(array) {
        let a = new Array();
        a = array;
        let total = 0;
        for (let i = 0; i < a.length; i++) {
            total += a[i];
        }
        return total;
    }

    tabelas(){
        tabela()
    }
}
// Comum
function erroPreenchimento(vaiPagar,
    valorEmprestimoHTML, taxaJurosHTML, numeroCarenciaHTML, numeroPrestacaoHTML) {
    let cont = 0, texto = "";

    if (isNaN(valorEmprestimoHTML)) {
        texto += "Você não informou o valor do emprestimo\n"
        cont++;
    }
    else if (valorEmprestimoHTML <= 0) {
        texto += "Você informou o valor do emprestimo menor ou igual a Zero\n"
        cont++;
    }
    if (isNaN(taxaJurosHTML)) {
        texto += "Você não informou o valor da taxa de Juros\n"
        cont++;
    }
    else if (taxaJurosHTML <= 0) {
        texto += "Você informou o valor da taxa juros menor ou igual a Zero\n"
        cont++;
    }
    if (isNaN(numeroCarenciaHTML)) {
        texto += "Você não informou o valor da Carencia\n"
        cont++;
    }
    else if (numeroCarenciaHTML < 0) {
        texto += "Você informou o valor da Carencia menor do que Zero\n"
        cont++;
    }
    if (isNaN(numeroPrestacaoHTML)) {
        texto += "Você não informou o valor da Prestação\n"
        cont++;
    }
    else if (numeroPrestacaoHTML <= 0) {
        texto += "Você informou o valor da Prestação menor e iqual a Zero\n"
        cont++;
    }

    if (cont > 0) {
        alert(texto)
    }
    return cont === 0;
}
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
    let = texto = '<tr>' +
        '<th>' + mes + '</th>' +
        '<th>' + formatarValor(saldo) + '</th>' +
        '<th>' + formatarValor(amortizacao) + '</th>' +
        '<th>' + formatarValor(juros) + '</th>' +
        '<th>' + formatarValor(prestacao) + '</th>' +
        '</tr>';
    return texto;
}
function cabelho(nome) {
    return '<table border="1" >' + '<caption>' + nome + '</caption>'
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
function media(SAC, SPC) {
    return (SAC + SPC) / 2;
}
function calculeValorSaldoCarencia(vaiPagar, saldo, taxaJuros) {
    if (vaiPagar) {
        return saldo;
    }
    return Number.parseFloat(saldo) + Number.parseFloat(calculeValorJuros(saldo, taxaJuros));
}
function calculeValorJurosCarencia(vaiPagar, saldoAnterior, taxaJuros) {
    if (vaiPagar) {
        return calculeValorJuros(saldoAnterior, taxaJuros);
    }
    return 0.00;
}
function calculeValorJuros(saldoAnterior, taxaJuros) {
    return saldoAnterior * (taxaJuros / 100);
}
function tabela() {
    let valorEmprestimoHTML = conveterHTMltoFloat(document.getElementById('valorEmprestimo'));
    let taxaJurosHTML = conveterHTMltoFloat(document.getElementById('taxaJuros'));
    let numeroCarenciaHTML = conveterHTMltoInt(document.getElementById('numeroCarencia'));
    let numeroPrestacaoHTML = conveterHTMltoInt(document.getElementById('numeroPrestacao'));
    let vaiPagar = true;

    if (erroPreenchimento(vaiPagar, valorEmprestimoHTML, taxaJurosHTML, numeroCarenciaHTML, numeroPrestacaoHTML)) {
        tabelaSAC(vaiPagar, valorEmprestimoHTML, taxaJurosHTML, numeroCarenciaHTML, numeroPrestacaoHTML);
        tabelaSPC(vaiPagar, valorEmprestimoHTML, taxaJurosHTML, numeroCarenciaHTML, numeroPrestacaoHTML);
        // tabelaSAM(vaiPagar, valorEmprestimoHTML, taxaJurosHTML, numeroCarenciaHTML, numeroPrestacaoHTML);
    }
}

// SAC
function tabelaSAC(vaiPagar, valorEmprestimoHTML, taxaJurosHTML, numeroCarenciaHTML, numeroPrestacaoHTML) {
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

    let texto = cabelho("SAC")
        + alimentarTabela(mes, saldo, amortizacao, juros, prestacao);

    if (carencia > 0) {
        juros = calculeValorJurosCarencia(vaiPagar, saldo, taxaJuros);
        saldoAtual = calculeValorSaldoCarencia(vaiPagar, saldo, taxaJuros);
        saldoAnterior = saldoAtual;
        for (var i = mes + 1; i <= carencia; i++) {
            mes = i;
            prestacao = calculeValordaPrestacaoSAC(amortizacao, juros);
            texto += alimentarTabela(mes, saldoAtual, amortizacao, juros, prestacao);
            juros = calculeValorJurosCarencia(vaiPagar, saldoAnterior, taxaJuros);
            saldoAnterior = saldoAtual;
            saldoAtual = calculeValorSaldoCarencia(vaiPagar, saldoAnterior, taxaJuros);
            totalAmortizacao += amortizacao;
            totalJuros += juros;
            totalPrestacao += prestacao;
        }
    }
    else if (carencia === 0) {
        saldoAtual = saldo;
    }

    if (numberPrestacao > 0) {
        amortizacao = calculeValorAmotizaçãoSAC(numberPrestacao, saldoAtual);
        saldoAnterior = saldoAtual;
        saldoAtual = saldoAnterior - amortizacao;

        juros = calculeValorJuros(saldo, taxaJuros);
        for (var i = (carencia + 1); i <= (carencia + numberPrestacao); i++) {
            mes = i;
            prestacao = calculeValordaPrestacaoSAC(amortizacao, juros)
            texto += alimentarTabela(mes, saldoAtual, amortizacao, juros, prestacao);
            totalAmortizacao += amortizacao;
            totalJuros += juros;
            totalPrestacao += prestacao;
            saldoAnterior = saldoAtual;
            saldoAtual -= amortizacao;
            juros = calculeValorJuros(saldoAnterior, taxaJuros);

        }
    }
    texto += linhaTotal(totalAmortizacao, totalJuros, totalPrestacao, taxaJuros)
    tabelaHTML.innerHTML = texto;
}
function calculeValorSaldoSAC() { }
function calculeValorAmotizaçãoSAC(numeroPrestacao, valorEmprestimo) {
    return Number.parseFloat((valorEmprestimo / numeroPrestacao));
}
function calculeValordaPrestacaoSAC(amortizacao, juros) {
    return Number.parseFloat((amortizacao + juros));
}
function calculeValorJurosSAC() {

}
//SPC
function tabelaSPC(vaiPagar, valorEmprestimoHTML, taxaJurosHTML, numeroCarenciaHTML, numeroPrestacaoHTML) {
    // hTML
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

    let texto = cabelho("SPC")
        + alimentarTabela(mes, saldo, amortizacao, juros, prestacao);

    if (carencia > 0) {
        juros = calculeValorJurosCarencia(vaiPagar, saldo, taxaJuros);
        saldoAtual = calculeValorSaldoCarencia(vaiPagar, saldo, taxaJuros);

        for (var i = mes + 1; i <= carencia; i++) {
            mes = i;
            prestacao = calculeValordaPrestacaoSAC(amortizacao, juros);
            texto += alimentarTabela(mes, saldoAtual, amortizacao, juros, prestacao);
            saldoAnterior = saldoAtual;
            juros = calculeValorJurosCarencia(vaiPagar, saldoAnterior, taxaJuros);
            saldoAtual = calculeValorSaldoCarencia(vaiPagar, saldoAnterior, taxaJuros);
            totalAmortizacao += amortizacao;
            totalJuros += juros;
            totalPrestacao += prestacao;
        }
    } else if(carencia === 0){
        saldoAtual = saldo;
    }

    if (numberPrestacao > 0) {
        saldoAnterior = saldoAtual;
        saldoAtual = saldoAnterior - amortizacao;
        juros = calculeValorJuros(valorEmprestimo, taxaJuros);
        prestacao = calculeValordaPrestacaoSPC(saldoAnterior, taxaJuros, numberPrestacao);
        for (var i = (carencia + 1); i <= (carencia + numberPrestacao); i++) {
            mes = i;
            saldoAnterior = saldoAtual;
            juros = calculeValorJuros(saldoAnterior, taxaJuros);
            amortizacao = calculeValorAmotizaçãoSPC(prestacao, juros);
            saldoAtual -= amortizacao;
            texto += alimentarTabela(mes, saldoAtual, amortizacao, juros, prestacao);
            totalAmortizacao += amortizacao;
            totalJuros += juros;
            totalPrestacao += prestacao;
        }
    }
    texto += linhaTotal(totalAmortizacao, totalJuros, totalPrestacao, taxaJuros)
    tabelaHTML.innerHTML = texto;
}
function calculeValorSaldoSPC() { }
function calculeValorAmotizaçãoSPC(prestacao, juros) {
    return Number.parseFloat((prestacao - juros));
}
function calculeValorJurosSPC() {

}
function calculeValordaPrestacaoSPC(saldo, taxaJuros, numberPrestacao) {
    let juros = taxaJuros / 100;
    let fatorValorPresente = (((1 - (1 + juros) ** (-numberPrestacao))) / juros);
    return Number.parseFloat(saldo / fatorValorPresente);
}

//SAM
function tabelaSAM(vaiPagar, valorEmprestimoHTML, taxaJurosHTML, numeroCarenciaHTML, numeroPrestacaoHTML) {
    // hTML
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
    let texto = cabelho("SAM")
        + alimentarTabela(mes, saldo, amortizacao, juros, prestacao);

    if (carencia > 0) {
        juros = calculeValorJurosCarencia(vaiPagar, saldo, taxaJuros);
        saldoAtual = calculeValorSaldoCarencia(vaiPagar, saldo, taxaJuros);
        saldoAnterior = saldoAtual;
        for (var i = mes + 1; i <= carencia; i++) {
            mes = i;

            prestacao = calculeValordaPrestacaoSAC(amortizacao, juros);
            texto += alimentarTabela(mes, saldoAtual, amortizacao, juros, prestacao);
            saldoAnterior = saldoAtual;
            juros = calculeValorJurosCarencia(vaiPagar, saldoAnterior, taxaJuros);
            saldoAtual = calculeValorSaldoCarencia(vaiPagar, saldoAnterior, taxaJuros);
            totalAmortizacao += amortizacao;
            totalJuros += juros;
            totalPrestacao += prestacao;
        }
    }

    let saldoSPC, saldoSAC;
    let amortizacaoSPC, amortizacaoSAC;
    let jurosSPC, jurosSAC;
    let prestacaoSPC, prestacaoSAC;

    if (numberPrestacao > 0) {

        let saldoAtual = saldo - amortizacao;
        let saldoAnterior = saldo;
        juros = calculeValorJuros(saldo, taxaJuros);
        for (var i = (carencia + 1); i <= (carencia + numberPrestacao); i++) {
            mes = i;


            texto += alimentarTabela(mes, saldoAtual, amortizacao, juros, prestacao);
            totalAmortizacao += amortizacao;
            totalJuros += juros;
            totalPrestacao += prestacao;
            saldoAnterior = saldoAtual;
            saldoAtual -= amortizacao;
            juros = calculeValorJuros(saldoAnterior, taxaJuros);

        }
    }
    texto += linhaTotal(totalAmortizacao, totalJuros, totalPrestacao, taxaJuros)
    tabelaHTML.innerHTML = texto;
}
function calculeValorSaldoSAM() {
    return 0;
}
function calculeValorAmotizaçãoSAM(taxaJuros, juros, numeroPrestacao, valorEmprestimo) {
    let SAC = calculeValorAmotizaçãoSAC(numeroPrestacao, valorEmprestimo);
    let SPC = calculeValorAmotizaçãoSPC(calculeValordaPrestacaoSPC(valorEmprestimo, taxaJuros, numeroPrestacao), juros);
    return media(SAC, SPC);
}
function calculeValorJurosSAM() {

}
function calculeValordaPrestacaoSAM(saldo, taxaJuros, numberPrestacao, amortizacao, juros) {
    let SAC = calculeValordaPrestacaoSAC(amortizacao, juros);
    let SPC = calculeValordaPrestacaoSPC(saldo, taxaJuros, numberPrestacao);
    return media(SAC, SPC);
}

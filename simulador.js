let valorEmprestimoHTML = document.getElementById("valorEmprestimo").innerText;
let taxaJurosHTML = document.getElementById("taxaJuros").innerText;
let numeroCarenciaHTML = document.getElementById("numeroCarencia").innerText;
let numeroPrestacaoHTML = document.getElementById('numeroPrestacao').innerText;
let tabelaHTML = document.getElementById('tabela');

    function name() {
        console.log('TESTE');
    }
    
    function calculeValorJuros(saldoAnterior,juros) {
        return saldoAnterior*(juros/100);
    }

    function alimentarTabela(mes, saldo, amortizacao, juros, prestacao) {
        return '<th><td>' + mes + '</td><td>' + saldo + '</td><td>' + amortizacao + '</td><td>' + juros + '</td><td>' + prestacao + '</td></th>';
    }

    function tabela(){
       let tabelaHTML = document.getElementById('tabela');
       tabelaHTML.append(' <table border="1" ><tr><th>Mês</th> <th>Saldo</th><th>Amortização</th><th>Juros</th><th>Prestação</th></tr></table>');
        tabelaHTML.append(alimentarTabela("0",10,1000,500,500)); 
    }
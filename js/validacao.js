class Validacao {
    constructor() {

    }
    static valorSelecionadoTipoCarencia(){
        let valor = document.getElementById('tipoCarencia').value;
        return valor;
    }

    static temCarencia() {
        let TDHMTL = document.getElementById('thTipoCarencia');
        let carencia = conveterHTMltoInt(document.getElementById('numeroCarencia'));
        let texto = "";
        if (carencia > 0) {
            texto = '<label for="html">Vai pagar Juros na carencia como?</label><br>'
                + '<select name="carencia" id="tipoCarencia">'
                + '<option value="PJ">Pagamento dos Juros</option>'
                + '<option value="CJ">Capitalização de Juros</option>'
                + '<option value="JCASD">Juro Capitalização e  Acrescido de saldo Devedor</option>'
                + '</select>'
        } else {
            texto = "";
        }
       TDHMTL.innerHTML = texto;

    }
    static notUndefined(value) {
        return value != undefined;
    }
    static erroPreenchimento(vaiPagar, valorEmprestimoHTML, taxaJurosHTML, numeroCarenciaHTML, numeroPrestacaoHTML) {
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
}
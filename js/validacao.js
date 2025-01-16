class Validacao {

    /**
     * Cria uma instância da classe.
     * 
     * @constructor
     */
    constructor() {
        // ...existing code...
    }

    /**
     * Recupera o valor selecionado do elemento 'tipoCarencia'.
     * Se o elemento 'tipoCarencia' não for encontrado e 'carencia' for maior que 0,
     * chama o método 'temCarencia' e tenta recuperar o valor novamente.
     *
     * @returns {string} O valor do elemento 'tipoCarencia'.
     */
    static valorSelecionadoTipoCarencia() {
        let tipoCarenciaHTML = document.getElementById('tipoCarencia');
        let carencia = converterHTMLtoInt(document.getElementById('numeroCarencia'));
        if (tipoCarenciaHTML === null && carencia > 0) {
            this.temCarencia();
            return this.valorSelecionadoTipoCarencia();
        }
        return tipoCarenciaHTML.value;
    }

    /**
     * Determina se a tabela deve ser ocultada com base nos parâmetros fornecidos.
     *
     * @param {number} carencia - O valor do período de carência.
     * @param {string} nome - O nome a ser verificado contra condições específicas.
     * @returns {boolean} - Retorna true se a tabela deve ser ocultada, caso contrário, false.
     */
    static nãoExibirTabela(carencia, nome) {
        if (carencia > 0) {
            let tipoCarencia = Validacao.valorSelecionadoTipoCarencia();
            if (tipoCarencia === "CJ") {
                switch (nome) {
                    case "SPC":
                    case "SAM":
                        return true;
                    default:
                        return false;
                }
            }
        }
        return false;
    }

    /**
     * Atualiza o HTML interno do elemento com id 'thTipoCarencia' com base no valor de 'numeroCarencia'.
     * Se 'numeroCarencia' for maior que 0, exibe um menu suspenso para selecionar como lidar com os juros durante o período de carência.
     * Caso contrário, limpa o HTML interno.
     *
     * @static
     */
    static temCarencia() {
        let TDHTML = document.getElementById('thTipoCarencia');
        let carencia = converterHTMLtoInt(document.getElementById('numeroCarencia'));
        let texto = "";
        if (carencia > 0) {
            texto = '<label for="html">Vai pagar Juros na carência como?</label><br>'
                + '<select name="carencia" id="tipoCarencia">'
                + '<option value="PJ">Pagamento dos Juros</option>'
                + '<option value="CJ">Capitalização de Juros</option>'
                + '<option value="JCASD">Juro Capitalização e Acrescido de saldo Devedor</option>'
                + '</select>';
        } else {
            texto = "";
        }
        TDHTML.innerHTML = texto;
    }

    /**
     * Verifica se um valor não é indefinido.
     *
     * @param {*} value - O valor a ser verificado.
     * @returns {boolean} - Retorna true se o valor não for indefinido, 
     * caso contrário, false.
     */
    static notUndefined(value) {
        return value !== undefined;
    }

    /**
     * Valida os valores de entrada para a simulação de empréstimo e exibe mensagens de erro se alguma validação falhar.
     *
     * @param {number} valorEmprestimoHTML - O valor do empréstimo informado pelo usuário.
     * @param {number} taxaJurosHTML - A taxa de juros informada pelo usuário.
     * @param {number} numeroCarenciaHTML - O período de carência informado pelo usuário.
     * @param {number} numeroPrestacaoHTML - O número de prestações informado pelo usuário.
     * @returns {boolean} - Retorna true se todas as entradas forem válidas, 
     *  caso contrário, false.
     */
    static erroPreenchimento(valorEmprestimoHTML, taxaJurosHTML, numeroCarenciaHTML, numeroPrestacaoHTML) {
        let cont = 0, texto = "";

        if (isNaN(valorEmprestimoHTML)) {
            texto += "Você não informou o valor do empréstimo\n";
            cont++;
        } else if (valorEmprestimoHTML <= 0) {
            texto += "Você informou o valor do empréstimo menor ou igual a Zero\n";
            cont++;
        }
        if (isNaN(taxaJurosHTML)) {
            texto += "Você não informou o valor da taxa de Juros\n";
            cont++;
        } else if (taxaJurosHTML <= 0) {
            texto += "Você informou o valor da taxa de juros menor ou igual a Zero\n";
            cont++;
        }
        if (isNaN(numeroCarenciaHTML)) {
            texto += "Você não informou o valor da Carência\n";
            cont++;
        } else if (numeroCarenciaHTML < 0) {
            texto += "Você informou o valor da Carência menor do que Zero\n";
            cont++;
        }
        if (isNaN(numeroPrestacaoHTML)) {
            texto += "Você não informou o valor da Prestação\n";
            cont++;
        } else if (numeroPrestacaoHTML <= 0) {
            texto += "Você informou o valor da Prestação menor ou igual a Zero\n";
            cont++;
        }

        if (cont > 0) {
            alert(texto);
        }
        return cont === 0;
    }
}
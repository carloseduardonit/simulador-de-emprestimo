describe('Simulador de Empréstimo Com Carência ', () => {
  
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('./index.html');
    cy.get('#valorEmprestimo').clear().type('5000');
    cy.get('#taxaJuros').clear().type('12');
    cy.get('#numeroCarencia').trigger('mouseover').clear().type('24').trigger('mouseout');
  });

  afterEach(() => {
    cy.get('#numeroPrestacao').clear().type('36');
    cy.get('#btnSimular').click();
  });

  it('com Pagamento de Juros', () => {
    cy.get('#numeroCarencia').invoke('val').then((texto) => {
      const numero = parseFloat(texto);
      if (numero > 0) {
         cy.get('#tipoCarencia').select('PJ', { force: true }).wait(1000);
      }
    });
    //cy.wait(10000).screenshot();
  });
  
  it('com Capitalização de Juros', () => {
    cy.get('#numeroCarencia').invoke('val').then((texto) => {
      const numero = parseFloat(texto);
      if (numero > 0) {
         cy.get('#tipoCarencia').select('CJ', { force: true }).wait(1000);
      }
    });

    //cy.wait(10000).screenshot();
  });
  
  it('com Juro Capitalização e Acrescido de Saldo Devedor', () => {
    cy.get('#numeroCarencia').invoke('val').then((texto) => {
      const numero = parseFloat(texto);
      if (numero > 0) {
         cy.get('#tipoCarencia').select('JCASD', { force: true }).wait(1000);
      }
    });
    //cy.wait(10000).screenshot();
  });

});


describe('Simulador de Empréstimo Sem Carência ', () => {
  
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('./index.html');
    cy.get('#valorEmprestimo').clear().type('5000');
    cy.get('#taxaJuros').clear().type('12');
    cy.get('#numeroCarencia').trigger('mouseover').clear().type('0').trigger('mouseout');
  });

  afterEach(() => {
    cy.get('#numeroPrestacao').clear().type('36');
    cy.get('#btnSimular').click();
  });

  it('Simples', () => {
    
  });
  

  
 

});


describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://simulador-de-emprestimo-two.vercel.app/')
    cy.get('#valorEmprestimo').clear().type('5000');
    cy.get('#taxaJuros').clear().type('12');
    cy.get('#numeroCarencia').clear().type('24');
    cy.get('#numeroCarencia').invoke('text').then((texto) => {
      const numero = parseFloat(texto);
      expect(numero).to.be.greaterThan(0);
    });
    cy.get('#tipoCarencia').select('Juro Capitalização e Acrescido de saldo Devedor');
  
    cy.get('#numeroPrestacao').clear().type('36');
  });
});
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://simulador-de-emprestimo-two.vercel.app/')
    cy.get('#valorEmprestimo').clear().type('5000');
    cy.get('#taxaJuros').clear().type('12');
    cy.get('#numeroCarencia').trigger('mouseover').clear().type('24').trigger('mouseout');

    cy.get('#numeroCarencia').invoke('val').then((texto) => {
      const numero = parseFloat(texto);
      if (numero > 0) {
         cy.get('#tipoCarencia').select('CJ', { force: true }).wait(1000);
         
      }
    });
    cy.get('#numeroPrestacao').clear().type('36');
    cy.get('#btnSimular').click();
  });
});


/// <reference types="cypress" />

context('Adds items to cart', () => {
  it('Add items to cart', () => {
    cy.visit('localhost:3000/products/1');
    cy.get('button').click();

    // cy.visit('localhost:3000/CARTSEITE');
    // cy.get.('.p').contains('PRODUCTNAME');
    // cy.get('[data-cy="addToCartButton"]').click;
  });
});

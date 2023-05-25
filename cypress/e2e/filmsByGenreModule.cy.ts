import { cy } from 'local-cypress';

describe('Films by genre Module', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('the button named `Crime` should be visible', () => {
    cy.get('[data-cy="categorieBtn-Crime"]')
      .should('be.visible')
      .should('have.text', 'Crime')
      .click()
      .should('have.css', 'background-color', 'rgb(241, 121, 0)');
  });

  it('when you click on the button `Crime`, the query "search for movies by genre" should go', () => {
    const waitSecValue = 3000;

    cy.get('[data-cy="categorieBtn-Crime"]')
      .should('have.text', 'Crime')
      .wait(waitSecValue)
      .click();
  });
});

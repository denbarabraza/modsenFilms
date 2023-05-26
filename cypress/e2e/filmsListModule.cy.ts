import { cy } from 'local-cypress';

describe('Films list Module', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  const filmsCount = 16;
  const waitSecValue = 3000;

  it('initially, 16 films should be uploaded', () => {
    cy.wait(waitSecValue);
    cy.get('[data-cy="filmsCard"]').should('have.length', filmsCount);
  });

  it('when you click on the "Show More" button, 16 more films should be loaded', () => {
    cy.wait(waitSecValue);
    cy.get('[data-cy="showMoreBtn"]').click();
    cy.get('[data-cy="filmsCard"]').should('have.length', filmsCount * 2);
  });

  it('list with films should be visible', () => {
    cy.get('[data-cy="filmsList"]').should('be.visible');
  });
});

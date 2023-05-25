describe('Films list Module', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  const filmsCount = 16;

  it('list with films should be visible', () => {
    cy.get('[data-cy="filmsList"]').should('be.visible');
  });

  it('initially, there should be 16 films on the page', () => {
    cy.get('[data-cy="filmsCard"]').should('have.length', filmsCount);
  });

  it('when you click on the "Show More" button, 16 more films should be loaded', () => {
    cy.get('[data-cy="showMoreBtn"]').click();
    cy.get('[data-cy="filmsCard"]').should('have.length', filmsCount * 2);
  });
});

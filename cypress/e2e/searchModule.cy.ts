describe('Search Module', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should visible search elements', () => {
    cy.get('[data-cy="inputItem"]')
      .get('[data-cy="deleteIcn"]')
      .get('[data-cy="searchBtn"]')
      .should('be.visible');
  });

  it('interaction with the input should be correct', () => {
    const inputValue = 'This is an input value, test cypress... ';

    cy.get('[data-cy="inputItem"]').type(inputValue).should('have.value', inputValue);
    cy.get('[data-cy="deleteIcn"]').click();
    cy.get('[data-cy="inputItem"]').type(inputValue).should('not.have.value');
  });

  it('when you click on the button, the query "search for movies by title" should go', () => {
    const filmTitle = 'dream';
    const URL = `https://ott-details.p.rapidapi.com/search?title=${filmTitle}`;

    cy.intercept('GET', URL).as('fetchFilmsByTitle');
    cy.get('[data-cy="inputItem"]').type(filmTitle).should('have.value', filmTitle);
    cy.get('[data-cy="searchBtn"]').wait(3000).click();

    cy.wait('@fetchFilmsByTitle', { timeout: 5000 }).then(interception => {
      expect(interception.request.url).to.equal(URL);
    });
  });

  it('hints should appear when the input value is more than one character', () => {
    cy.get('[data-cy="inputItem"]').type('H').should('have.value', 'H');
    cy.get('[data-cy="hintsBlock"]').should('be.visible');
  });
});

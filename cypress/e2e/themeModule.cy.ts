describe('Theme module', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('the theme should change when clicking on the toggle, header and toggle test', () => {
    cy.get('[data-cy="header"]').should(
      'have.css',
      'background-color',
      'rgb(229, 228, 232)',
    );

    cy.get('[data-cy="themeToggleSlider"]').should(
      'have.css',
      'background-color',
      'rgb(255, 255, 255)',
    );

    cy.get('[data-cy="themeToggleSlider"]').eq(0).click();

    cy.get('[data-cy="header"]').should(
      'have.css',
      'background-color',
      'rgb(25, 25, 25)',
    );

    cy.get('[data-cy="themeToggleSlider"]').should(
      'have.css',
      'background-color',
      'rgb(241, 121, 0)',
    );
  });

  it('the theme should be saved and applied after the page is reloaded', () => {
    cy.get('[data-cy="themeToggleSlider"]').eq(0).click();
    cy.reload();
    cy.get('[data-cy="header"]').should(
      'have.css',
      'background-color',
      'rgb(25, 25, 25)',
    );
  });
});

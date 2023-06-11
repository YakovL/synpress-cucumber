import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Problem 1: tests fail with "Cypress detected that you returned a promise from a command while also invoking one or more cy commands in that promise."
// Problem 2: .feature doesn't suggest boilerplates unlike Cucumber. Should we use cli to get that?

Given("we're on the test dapp page", () => {
  cy.visit('https://metamask.github.io/test-dapp/');
});

When('we press connect', function () {
  cy.get('#connectButton').click();
});

When('we accept notification', function () {
  cy.acceptMetamaskAccess().should('be.true');
});

Then(
  'the button should say Connected',
  function () {
    cy.get('#connectButton').should('have.text', 'Connected');
  }
);

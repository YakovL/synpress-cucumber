// Problem 1:
//  while  npm run test:e2e  works (cypress run),  npm run test  (cypress open → ...) fails with
//  "Cypress detected that you returned a promise from a command while also invoking one or more cy commands in that promise."
//  This complicates writing tests as with  cypress open  we have hot reloading and fast feedback loop when writing tests.
// Problem 2: .feature doesn't suggest boilerplates unlike Cucumber. Should we use cli to get that?

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given("we're on the test dapp page", () => {
  cy.visit('https://www.chatbase.co');
});

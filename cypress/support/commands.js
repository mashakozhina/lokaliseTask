
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

import dataTestIds from "../fixtures/dataTestIds";

// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("login", (email=Cypress.config('email'), password=Cypress.config('password')) => {
  cy.get(dataTestIds.loginWrapper).should('be.visible')
    .get(dataTestIds.emailPasswordField)
    .eq(0)
    .type(email)
    .get(dataTestIds.emailPasswordField)
    .eq(1)
    .type(password)
    .get(dataTestIds.loginButton)
    .click()
    .get(dataTestIds.projectsWrapper)
    .should("be.visible");
});
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

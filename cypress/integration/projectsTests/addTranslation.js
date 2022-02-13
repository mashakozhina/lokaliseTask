///<reference types='Cypress' />

import dataTestIds from "../../fixtures/dataTestIds.js";
import paths from "../../fixtures/paths.js";
import navigation from "../../helpers/navigation.js";
import project from "../../helpers/project.js";
import users from "../../fixtures/users.json";

describe("Add first project, logged in user", () => {
  beforeEach(() => {
    navigation.openApp();
    cy.login(users.fourthUserName, users.fourthUserPassword);
    project.addProject(Cypress.config("project"));
    project.addKey(Cypress.config("project"));
  });

  afterEach(() => {
    cy.visit(paths.projectsPage);
    cy.get(dataTestIds.projectMoreButton).each(() => {
      project.removeProject(Cypress.config("project"));
    });
  });

  it("Add first key, logged in user", () => {
    cy.get(dataTestIds.keyContainer)
      .should('be.visible');
      cy.reload()
    cy.get(dataTestIds.keyValue)
      .eq(0)
      .click({ force: true })
      .type('test')
      .get(dataTestIds.submitIcon)
      .eq(0)
      .click();
    cy.get(dataTestIds.keyValue)
      .eq(1)
      .click({ force: true })
      .type('test')
      .get(dataTestIds.submitIcon)
      .eq(0)
      .click()
      .get('div').contains('test')
  });
});

///<reference types='Cypress' />

import dataTestIds from "../../fixtures/dataTestIds.js";
import paths from "../../fixtures/paths.js";
import navigation from "../../helpers/navigation.js";
import project from "../../helpers/project.js";
import users from "../../fixtures/users.json";

describe("Add first project, logged in user", () => {
  beforeEach(() => {
    navigation.openApp();
    cy.login(users.firstUserName,users.firstUserPassword);
  });

  afterEach(() => {
    cy.visit(paths.projectsPage);
    cy.get(dataTestIds.projectMoreButton).each(() => {
      project.removeProject(Cypress.config('project'));
    })
  });

  it("Add first project, logged in user", () => {
    project.addProject(Cypress.config('project'));
    cy.get(dataTestIds.projectWrapper).should('be.visible')
      .visit(paths.projectsPage)
      .get(dataTestIds.projectContainer).should('have.length', 1);
  });
});


///<reference types='Cypress' />

import dataTestIds from "../../fixtures/dataTestIds.js";
import paths from "../../fixtures/paths.js";
import navigation from "../../helpers/navigation.js";
import project from "../../helpers/project.js";
import users from "../../fixtures/users.json";

describe("Add second project, logged in user", () => {
  beforeEach(() => {
    navigation.openApp();
    cy.login(users.secondUserName, users.secondUserPassword);
    project.addProject(Cypress.config('project'));
  });

  afterEach(() => {
    cy.visit(paths.projectsPage);
    cy.get(dataTestIds.projectMoreButton).each(() => {
      project.removeProject(Cypress.config('project'));
    })
  });

  it("Add second project, logged in user", () => {
    cy.visit(paths.projectsPage)
    project.addProject(Cypress.config('secondProject'));
    cy.visit(paths.projectsPage)
      .get(dataTestIds.projectContainer).should('have.length', 2);
  });
});


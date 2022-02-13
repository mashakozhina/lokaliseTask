///<reference types='Cypress' />

import dataTestIds from "../../fixtures/dataTestIds.js";
import paths from "../../fixtures/paths.js";
import navigation from "../../helpers/navigation.js";
import project from "../../helpers/project.js";
import users from "../../fixtures/users.json";

describe("Add first project, logged in user", () => {
  beforeEach(() => {
    navigation.openApp();
    cy.login(users.thirdUserName, users.thirdUserPassword);
    project.addProject(Cypress.config("project"));
  });

  afterEach(() => {
    cy.visit(paths.projectsPage);
    cy.get(dataTestIds.projectMoreButton).each(() => {
      project.removeProject(Cypress.config("project"));
    });
  });

  it("Add first key, logged in user", () => {
    project.addKey(Cypress.config("project"))
    cy.get(dataTestIds.keyContainer)
      .should("be.visible");
  });
});

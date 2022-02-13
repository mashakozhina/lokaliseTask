import dataTestIds from "../fixtures/dataTestIds.js";
import paths from "../fixtures/paths.js";

const addProject = (projectName) => {
    cy.get(dataTestIds.addProjectButton)
      .click()
      .get(dataTestIds.projectNameField)
      .type(projectName)
      .get(dataTestIds.languageDropdown).eq(1)
      .click()
      .get(dataTestIds.targetLanguageOption).eq(2)
      .click()
      .get('span').contains(dataTestIds.projectCreateProceedButton)
      .click({force:true})
      .location('pathname').should('include', paths.projectPage);
  };

const removeProject = (projectName) => {
  cy.get(dataTestIds.projectMoreButton).eq(0)
    .click({force:true})
    .get(dataTestIds.settingsButton)
    .click({force:true})
    cy.scrollTo('bottom')
    .get(dataTestIds.projectDeleteButton)
    .click({force:true})
    .get(dataTestIds.bootboxInput)
    .eq(1)
    .type(projectName)
    .get(dataTestIds.confirmDeleteButton)
    .click({force:true})
    .get(dataTestIds.successAlert)
    .should("be.visible")
};

const addKey = (keyName) => {
cy.get(dataTestIds.addKeyButton)
      .click()
      .get(dataTestIds.keyName)
      .type()
      .get(dataTestIds.platformField)
      .click()
      .get(dataTestIds.platformSelection)
      .eq(1)
      .click()
      .get(dataTestIds.saveButton)
      .click()
      .location('pathname').should('include', paths.projectPage);
}

export default {
    addProject,
    removeProject,
    addKey
  };

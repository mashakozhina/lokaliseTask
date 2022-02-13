import paths from "../fixtures/paths.js";
import dataTestIds from "../fixtures/dataTestIds.js";

const openApp = () => {
  cy.visit(paths.root())
  .get(dataTestIds.homePageWrapper).should('be.visible');
};

const goToProject = (product) => {
};

export default {
  openApp,
  goToProject
};

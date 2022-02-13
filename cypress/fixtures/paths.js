const root  = () => {
  return `${Cypress.config('baseUrl')}`;
};
const projectsPage = '/projects';
const projectPage = '/project';


export default {
    root,
    projectsPage,
    projectPage
};
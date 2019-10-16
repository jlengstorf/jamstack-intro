exports.onCreatePage = async ({ page, actions }) => {
  if (page.path.match(/^\/api/)) {
    page.matchPath = `/api/*`;
    actions.createPage(page);
  }
  if (page.path.match(/^\/test/)) {
    page.matchPath = `/test/*`;
    actions.createPage(page);
  }
};

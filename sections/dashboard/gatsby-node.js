exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  if (page.path.match(/^\/dashboard/)) {
    page.matchPath = '/dashboard/*';

    // Update the page.
    createPage(page);
  }
};

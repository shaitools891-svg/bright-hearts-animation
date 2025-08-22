// Single Page Apps for GitHub Pages
// MIT License
// https://github.com/rafgraph/spa-github-pages

(function() {
  const redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect != location.href) {
    history.replaceState(null, null, redirect);
  }
})();

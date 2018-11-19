document.addEventListener('DOMContentLoaded', () => {

  // Start by loading first page
  loadPage('first');

  // Set links up to load new pages
  document.querySelectorAll('.nav-link').forEach(link => {
    link.onclick = () => {
      loadPage(link.dataset.page);
      return false;
    };
  });
});

// Renders contents of new page in main view
function loadPage(name) {
  const request = new XMLHttpRequest();
  request.open('GET', `/${name}`);
  request.onload = () => {
    const response = request.responseText;
    document.querySelector('#body').innerHTML = response;
  };
  request.send();
}
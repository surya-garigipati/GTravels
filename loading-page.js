const loadingPage = document.querySelector('#loading-page');
const mainPage = document.querySelector('#main-page');
const pageLink = document.querySelector('.page-link');

function showMainPage() {
  mainPage.classList.add('show');
  mainPage.classList.remove('hide');
}

function hideLoadingPage() {
  loadingPage.classList.add('hide');
  loadingPage.classList.remove('show');
}

setTimeout(() => {
  hideLoadingPage();
  showMainPage();
}, 10000);

pageLink.addEventListener('click', () => {
  loadingPage.classList.add('show');
  loadingPage.classList.remove('hide');
  setTimeout(() => {
    hideLoadingPage();
    // go to next page
  }, 10000);
});

import { Loading } from 'notiflix/build/notiflix-loading-aio';
import spinner from '../loader/loader';
import loader from '../loader/loader';


import { renderCollection } from '../renderSearchMovie/renderSearchMovie';
export let searchQuery;

// Warunek dla sprawdzania zawartości whatToOutput,
// przy ładowaniu strony jest on wstępnie pusty

if (
  window.location.pathname === '/index.html' ||
  window.location.pathname === '/'
) {
  const search_form = document.querySelector('[data-input]');
  const search_btn = document.querySelector('[data-search]');

  function searchHandler() {
    searchQuery = search_form.value;
    if (searchQuery === '') {
      document.querySelector('.not-found').classList.remove('is-hidden');
      return;
    } else {
      document.querySelector('.not-found').classList.add('is-hidden');
    }
    renderCollection(searchQuery);
    spinner();

  }

  search_btn.addEventListener('click', searchHandler);
  search_form.addEventListener('keypress', function checkKey(event) {
    if (event.key === 'Enter') {
      searchHandler();
    }
  });
}
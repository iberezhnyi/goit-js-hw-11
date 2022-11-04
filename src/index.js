import './css/styles.css';
import { notifyInfo, notifySuccess } from './js/notifications';
import SearchServiceApi from './js/search-service-api';
import { createMarkup } from './js/render-markup';

const searchServiceApi = new SearchServiceApi();

const refs = {
  form: document.getElementById('search-form'),
  gallery: document.querySelector('.gallery'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  clearGallaryContainer();

  searchServiceApi.query = e.currentTarget.elements.searchQuery.value.trim();

  fetchImagesAndUpdateUI();
}

async function fetchImagesAndUpdateUI() {
  try {
    const response = await searchServiceApi.fetchImages();

    if (!response.hits.length) {
      notifyInfo();
      return;
    }

    notifySuccess(response.totalHits);

    const galleryMarkup = createMarkup(response.hits);

    appendGalleryMarkup(galleryMarkup);
  } catch (error) {
    console.error(error);
  }
}

function appendGalleryMarkup(markup) {
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

function clearGallaryContainer() {
  refs.gallery.innerHTML = '';
}

import simpleLightbox from './js/simple-lightbox';
import { notifyInfo, notifySuccess } from './js/notifications';
import refs from './js/refs';
import SearchServiceApi from './js/search-service-api';
import createMarkup from './js/create-markup';
import smoothScroll from './js/smooth-scroll';

const searchServiceApi = new SearchServiceApi();

refs.form.addEventListener('submit', onFormSubmit);
refs.btnLoadMore.addEventListener('click', onLoadMore);

function onFormSubmit(e) {
  const inputValue = e.currentTarget.elements.searchQuery.value.trim();

  e.preventDefault();

  clearGallaryContainer();

  searchServiceApi.query = inputValue;

  searchServiceApi.resetPage();

  fetchImagesAndUpdateUI();
}

function onLoadMore() {
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

    simpleLightbox.refresh();

    smoothScroll();
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

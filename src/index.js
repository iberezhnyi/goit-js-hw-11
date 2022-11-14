import simpleLightbox from './js/components/simple-lightbox';
import {
  notifyInfo,
  notifySuccess,
  notifyFailure,
} from './js/components/notifications';
import refs from './js/components/refs';
import SearchServiceApi from './js/components/search-service-api';
import createMarkup from './js/components/create-markup';
import smoothScroll from './js/components/smooth-scroll';
import LoadMoreBtn from './js/components/load-more-btn';
import appendGalleryMarkup from './js/components/append-gallery-markup';
import clearGallaryContainer from './js/components/clear-gallary-container';
import getStartRandomCardsArray from './js/components/get-start-random-cards-array';

const loadMoreBtn = new LoadMoreBtn({
  selector: '.load-more__btn',
  hidden: true,
});
const searchServiceApi = new SearchServiceApi();
const startSearchServiceApi = new SearchServiceApi(200, 'photo');
startFetchImagesAndUpdateUI();

refs.form.addEventListener('submit', onFormSubmit);
loadMoreBtn.refs.button.addEventListener('click', fetchImagesAndUpdateUI);

async function startFetchImagesAndUpdateUI() {
  try {
    const startResponse = await startSearchServiceApi.fetchImages();

    if (!startResponse.hits.length) {
      notifyInfo();
      return;
    }

    const randomCardArray = getStartRandomCardsArray(startResponse.hits);
    const startGalleryMarkup = createMarkup(randomCardArray);

    appendGalleryMarkup(startGalleryMarkup);

    simpleLightbox.refresh();
  } catch (error) {
    notifyFailure();
    console.error(error);
  }
}

function onFormSubmit(e) {
  const inputValue = e.currentTarget.elements.searchQuery.value.trim();

  e.preventDefault();

  clearGallaryContainer();

  searchServiceApi.query = inputValue;

  searchServiceApi.resetPage();

  loadMoreBtn.show();

  fetchImagesAndUpdateUI();
}

async function fetchImagesAndUpdateUI() {
  loadMoreBtn.disable();

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

    loadMoreBtn.enable();
  } catch (error) {
    notifyFailure();
    console.error(error);
  }
}

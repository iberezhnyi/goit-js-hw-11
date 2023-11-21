import './refs';
import refs from './refs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const { galleryEl, formEl, loadMoreBtn, spinner, loadMoreTextcontent } = refs;

const simpleLightbox = new SimpleLightbox('.gallery a');

const clearMarcup = () => (galleryEl.innerHTML = '');

const resetQueryTextContent = () => (formEl.searchQuery.value = '');

const isHiddenAdd = () => loadMoreBtn.classList.add('is-hidden');

const isHiddenRemove = () => loadMoreBtn.classList.remove('is-hidden');

const btnDisabled = (ref, boolean) => (ref.disabled = boolean);

const getRandomIntNumber = () => Number.parseInt(Math.random() * (100 - 1) + 1);

const btnLoading = () => {
  btnDisabled(loadMoreBtn, true);
  spinner.classList.remove('is-hidden');
  loadMoreTextcontent.textContent = 'Loading...';
};

const btnLoadMore = () => {
  btnDisabled(loadMoreBtn, false);
  spinner.classList.add('is-hidden');
  loadMoreTextcontent.textContent = 'Load more';
};

export {
  simpleLightbox,
  clearMarcup,
  resetQueryTextContent,
  isHiddenAdd,
  isHiddenRemove,
  btnLoading,
  btnLoadMore,
  btnDisabled,
  getRandomIntNumber,
};

// let page = 1;
// const pageCounter = () => {
//   console.log('Page counter: ', page);
//   page += 1;
// };

// export const pageCounter1 = pageCounter();

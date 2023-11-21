import refs from './refs';
import { fetchPictures } from '../index';
import {
  clearMarcup,
  btnLoading,
  isHiddenRemove,
  btnDisabled,
} from './helpers';

const { formEl, loadMoreBtn, searchBtn } = refs;

let page = 1;
let query = '';

formEl.addEventListener('submit', handlerForm);
loadMoreBtn.addEventListener('click', onLoadMore);

function handlerForm(evt) {
  evt.preventDefault();

  page = 1;

  query = evt.currentTarget.elements.searchQuery.value;

  clearMarcup();

  btnDisabled(searchBtn, true);
  isHiddenRemove();
  btnLoading();

  fetchPictures(query);
}

function onLoadMore() {
  page += 1;

  console.log(query);
  console.log(page);

  btnLoading();

  fetchPictures(query, page);
}

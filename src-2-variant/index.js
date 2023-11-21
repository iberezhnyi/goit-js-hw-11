import './js/handler-form';
import './js/refs';
import refs from './js/refs';
import commonFetch from './js/common-fetch';
import { createPictureMarkup } from './js/create-markup';
import { info, warning, failure } from './js/notifications';
import {
  resetQueryTextContent,
  simpleLightbox,
  isHiddenAdd,
  btnLoadMore,
  btnDisabled,
  getRandomIntNumber,
} from './js/helpers';

const { searchBtn } = refs;

const randomIntNumber = getRandomIntNumber();

fetchPictures('photo', randomIntNumber, 4);

export async function fetchPictures(query, page, perPage) {
  try {
    const resp = await commonFetch(query, page, perPage);

    if (!resp.ok) throw new Error();

    console.log(resp);
    const data = await resp.json();
    console.log(data);

    if (!data.hits.length) {
      btnDisabled(searchBtn, false);
      isHiddenAdd();
      warning();
      return;
    }

    info(`Hooray! We found ${data.totalHits} images.`);

    createPictureMarkup(data.hits);

    simpleLightbox.refresh();

    btnDisabled(searchBtn, false);
    btnLoadMore();
    resetQueryTextContent();

    // const { height: cardHeight } = document
    //   .querySelector('.gallery')
    //   .firstElementChild.getBoundingClientRect();

    // window.scrollBy({
    //   top: cardHeight * 2,
    //   behavior: 'smooth',
    // });
  } catch (error) {
    btnDisabled(searchBtn, false);
    isHiddenAdd();
    failure(error.name, error.message);
    console.log(error);
  }
}

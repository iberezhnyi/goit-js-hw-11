import refs from './refs';

export default markup => {
  refs.gallery.insertAdjacentHTML('beforeend', markup);
};

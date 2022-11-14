import refs from './refs';

export default () => {
  const { height: cardHeight } =
    refs.gallery.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 0.195,
    behavior: 'smooth',
  });
};

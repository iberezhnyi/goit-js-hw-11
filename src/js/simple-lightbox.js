import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const options = {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
};

export default new SimpleLightbox('.gallery .gallery__photo-link', options);

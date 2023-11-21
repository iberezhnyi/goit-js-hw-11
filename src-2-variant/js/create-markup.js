import refs from './refs';

const { galleryEl } = refs;

const createMarkup = array =>
  array
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-card">
        <a class="gallery-card__image-link" href="${largeImageURL}">
          <img class="gallery-card__image" src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <ul class="list gallery-card__info">
          <li>
            <p class="gallery-card__info-item">
                <b class="gallery-card__info-icon gallery-card__info-icon--heart">Likes: ${likes}</b>
            </p>
          </li>
          <li>
            <p class="gallery-card__info-item"">
                <b class="gallery-card__info-icon gallery-card__info-icon--views">Views: ${views}</b>
            </p>
          </li>
            <p class="gallery-card__info-item"">
                <b class="gallery-card__info-icon gallery-card__info-icon--comment">Comments: ${comments}</b>
            </p>
          <li>
            <p class="gallery-card__info-item"">
                <b class="gallery-card__info-icon gallery-card__info-icon--download">Downloads: ${downloads}</b>
            </p>
          </li>
        </ul>
      </li>`
    )
    .join('');

export function createPictureMarkup(array) {
  const picturesMarcup = createMarkup(array);
  galleryEl.insertAdjacentHTML('beforeend', picturesMarcup);
}

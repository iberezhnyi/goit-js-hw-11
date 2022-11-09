export function cardTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
  <div class="gallery-card">
    <a href="${largeImageURL}" class="gallery-card__photo-link">
      <img
        class="gallery-card__image"
        src="${webformatURL}"
        alt="${tags}"
        loading="lazy"
      />
    </a>
    <div class="gallery-card__info">
      <p class="gallery-card__info-item">
        <b>Likes: ${likes}</b>
      </p>
      <p class="gallery-card__info-item">
        <b>Views: ${views}</b>
      </p>
      <p class="gallery-card__info-item">
        <b>Comments: ${comments}</b>
      </p>
      <p class="gallery-card__info-item">
        <b>Downloads: ${downloads}</b>
      </p>
    </div>
  </div>
  `;
}

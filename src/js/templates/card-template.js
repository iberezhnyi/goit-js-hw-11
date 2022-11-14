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
  <li class="gallery-card">
    <a href="${largeImageURL}" class="gallery-card__image-link">
      <img
        class="gallery-card__image"
        src="${webformatURL}"
        alt="${tags}"
        loading="lazy"
      />
    </a>
    <ul class="list gallery-card__info">
      <li>
        <p class="gallery-card__info-item">
          <b class="gallery-card__info-icon gallery-card__info-icon--heart">Likes: ${likes}</b>
        </p>
      </li>
      <li>
        <p class="gallery-card__info-item">
          <b class="gallery-card__info-icon gallery-card__info-icon--views">Views: ${views}</b>
        </p>
      </li>
      <li>
        <p class="gallery-card__info-item">
          <b class="gallery-card__info-icon gallery-card__info-icon--comment">Comments: ${comments}</b>
        </p>
      </li>
      <li>
        <p class="gallery-card__info-item">
          <b class="gallery-card__info-icon gallery-card__info-icon--download">Downloads: ${downloads}</b>
        </p>
      </li>
    </ul>
  </li>
  `;
}

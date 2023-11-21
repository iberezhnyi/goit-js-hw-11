const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31085485-d3b506dd28137d49a12c009f9';
const baseParameter = 'image_type=photo&orientation=horizontal&safesearch=true';

export default async function commonFetch(
  query = 'flowers',
  page = 1,
  perPage = 3
) {
  return await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&${baseParameter}&per_page=${perPage}&page=${page}`
  );
}

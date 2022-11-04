const axios = require('axios').default;

export default class SearchServiceApi {
  constructor() {
    this.searchQuery = '';
  }

  async fetchImages() {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '31085485-d3b506dd28137d49a12c009f9',
        q: `${this.searchQuery}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    });
    return response.data;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

import { cardTemplate } from '../templates/card-temlate';

export function createMarkup(data) {
  return data.map(cardTemplate).join('');
}

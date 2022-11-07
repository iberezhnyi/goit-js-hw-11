import { cardTemplate } from '../templates/card-temlate';

export default data => {
  return data.map(cardTemplate).join('');
};

import { cardTemplate } from '../templates/card-template';

export default data => {
  return data.map(cardTemplate).join('');
};

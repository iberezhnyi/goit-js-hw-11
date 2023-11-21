import { Notify } from 'notiflix';

export const info = string => Notify.info(string);

export const warning = () =>
  Notify.warning(
    'Sorry, there are no images matching your search query. Please try again.'
  );

export const failure = (errorName, errorMessage) =>
  Notify.failure(`Something went wrong! :( ${errorName}, ${errorMessage}`);

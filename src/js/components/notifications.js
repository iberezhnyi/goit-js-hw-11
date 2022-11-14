import { Notify } from 'notiflix/build/notiflix-notify-aio';

export { notifyInfo, notifySuccess, notifyFailure };

const notifyInfo = () =>
  Notify.info(
    'Sorry, there are no images matching your search query. Please try again.'
  );

const notifySuccess = totalHits =>
  Notify.success(`Hooray! We found ${totalHits} images.`);

const notifyFailure = () => Notify.failure('Something went wrong :(');

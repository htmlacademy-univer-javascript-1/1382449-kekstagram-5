import './pictures.js';
import { loadData, uploadData } from './fetch.js';
import { renderPhotos } from './pictures.js';
import './hashtags.js';
import './slider-and-control.js';
import './filters.js';
import './own-photos.js';
import { showAlert } from './util.js';
import { showErrorMessage, showSuccessMessage } from './messages.js';
import { hideModal, setOnFormSubmit } from './hashtags.js';

let photos;

const onSuccess = (data) => {
  photos = data.slice();
  renderPhotos(data.slice());
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};

const onFail = () => {
  showAlert('Произошла ошибка при загрузке фотографий');
};

loadData(onSuccess, onFail);

setOnFormSubmit(async (data) => {
  try {
    uploadData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

export { photos };

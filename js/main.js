import './pictures.js';
import { loadData } from './fetch.js';
import { renderPhotos } from './pictures.js';
import './hashtags.js';
import './slider-and-control.js';
import './filters.js';
import './own-photos.js';
import { showAlert } from './util.js';

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

export { photos };

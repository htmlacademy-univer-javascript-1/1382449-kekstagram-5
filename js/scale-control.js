import {previewContainer} from './slider-and-control.js';

const Zoom = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

const minusButton = document.querySelector('.scale__control--smaller');
const plusButton = document.querySelector('.scale__control--bigger');
const controlValueElement = document.querySelector('input[name="scale"]');

const changeZoom = (factor = 1) => {
  let size = parseInt(controlValueElement.value, 10) + (Zoom.STEP * factor);

  if (size < Zoom.MIN) {
    size = Zoom.MIN;
  }

  if (size > Zoom.MAX) {
    size = Zoom.MAX;
  }

  controlValueElement.value = `${size}%`;
  previewContainer.style.transform = `scale(${size / 100})`;
};

const onMinusButtonClick = () => {
  changeZoom(-1);
};

const onPlusButtonClick = () => {
  changeZoom();
};

minusButton.addEventListener('click', onMinusButtonClick);
plusButton.addEventListener('click', onPlusButtonClick);

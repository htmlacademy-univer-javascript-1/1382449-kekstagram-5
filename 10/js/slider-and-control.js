const Zoom = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

const minusButton = document.querySelector('.scale__control--smaller');
const plusButton = document.querySelector('.scale__control--bigger');
const controlValueElement = document.querySelector('input[name="scale"]');

const sliderField = document.querySelector('.img-upload__effect-level');
const sliderElement = sliderField.querySelector('.effect-level__slider');
const sliderElementValue = sliderField.querySelector('.effect-level__value');

const previewContainer = document.querySelector('.img-upload__preview');
const picture = previewContainer.querySelector('img');

const effectRadios = document.querySelectorAll('input[name="effect"]');

const chrome = {
  MAX: 1,
  MIN: 0,
  STEP: 0.1,
};

const sepia = {
  MAX: 1,
  MIN: 0,
  STEP: 0.1,
};

const marvin = {
  MAX: 100,
  MIN: 0,
  STEP: 1,
};

const phobos = {
  MAX: 3,
  MIN: 0,
  STEP: 0.1,
};

const heat = {
  MAX: 3,
  MIN: 1,
  STEP: 0.1,
};

sliderField.classList.add('hidden');

const resetSlider = () => {
  if (sliderElement.noUiSlider) {
    sliderElement.noUiSlider.destroy();
  }
};

const changeSliderForNone = () => {
  picture.style.filter = '';
  sliderField.classList.add('hidden');
  sliderElement.noUiSlider.destroy();
};

const createSliderForChrome = () => {
  let currentSliderValue = chrome.MAX;
  resetSlider();
  sliderField.classList.remove('hidden');
  noUiSlider.create(sliderElement, {
    range: {
      min: chrome.MIN,
      max: chrome.MAX,
    },
    start: chrome.MAX,
    step: chrome.STEP,
    connect: 'lower',
  });

  sliderElement.noUiSlider.on('update', () => {
    currentSliderValue = sliderElement.noUiSlider.get();
    sliderElementValue.value = currentSliderValue;
    picture.style.filter = `grayscale(${currentSliderValue})`;
  });
};

const createSliderForSepia = () => {
  let currentSliderValue = sepia.MAX;
  resetSlider();
  sliderField.classList.remove('hidden');
  noUiSlider.create(sliderElement, {
    range: {
      min: sepia.MIN,
      max: sepia.MAX,
    },
    start: sepia.MAX,
    step: sepia.STEP,
    connect: 'lower',
  });

  sliderElement.noUiSlider.on('update', () => {
    currentSliderValue = sliderElement.noUiSlider.get();
    sliderElementValue.value = currentSliderValue;
    picture.style.filter = `sepia(${currentSliderValue})`;
  });
};

const createSliderForMarvin = () => {
  let currentSliderValue = marvin.MAX;
  resetSlider();
  sliderField.classList.remove('hidden');
  noUiSlider.create(sliderElement, {
    range: {
      min: marvin.MIN,
      max: marvin.MAX,
    },
    start: marvin.MAX,
    step: marvin.STEP,
    connect: 'lower',
  });

  sliderElement.noUiSlider.on('update', () => {
    currentSliderValue = sliderElement.noUiSlider.get();
    sliderElementValue.value = currentSliderValue;
    picture.style.filter = `invert(${currentSliderValue}%)`;
  });
};

const createSliderForPhobos = () => {
  let currentSliderValue = phobos.MAX;
  resetSlider();
  sliderField.classList.remove('hidden');
  noUiSlider.create(sliderElement, {
    range: {
      min: phobos.MIN,
      max: phobos.MAX,
    },
    start: phobos.MAX,
    step: phobos.STEP,
    connect: 'lower',
  });

  sliderElement.noUiSlider.on('update', () => {
    currentSliderValue = sliderElement.noUiSlider.get();
    sliderElementValue.value = currentSliderValue;
    picture.style.filter = `blur(${currentSliderValue}px)`;
  });
};

const createSliderForHeat = () => {
  let currentSliderValue = heat.MAX;
  resetSlider();
  sliderField.classList.remove('hidden');
  noUiSlider.create(sliderElement, {
    range: {
      min: heat.MIN,
      max: heat.MAX,
    },
    start: heat.MAX,
    step: heat.STEP,
    connect: 'lower',
  });

  sliderElement.noUiSlider.on('update', () => {
    currentSliderValue = sliderElement.noUiSlider.get();
    sliderElementValue.value = currentSliderValue;
    picture.style.filter = `brightness(${currentSliderValue})`;
  });
};

effectRadios.forEach((radio) => {
  radio.addEventListener('change', (evt) => {
    if (evt.target.value === 'none') {
      changeSliderForNone();
    } else if (evt.target.value === 'chrome') {
      createSliderForChrome();
    } else if (evt.target.value === 'sepia') {
      createSliderForSepia();
    } else if (evt.target.value === 'marvin') {
      createSliderForMarvin();
    } else if (evt.target.value === 'phobos') {
      createSliderForPhobos();
    } else if (evt.target.value === 'heat') {
      createSliderForHeat();
    }
  });
});

const resetSliderToNone = () => {
  picture.style.filter = '';
  sliderField.classList.add('hidden');
  if (sliderElement.noUiSlider) {
    sliderElement.noUiSlider.destroy();
  }
};

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

export {resetSliderToNone};

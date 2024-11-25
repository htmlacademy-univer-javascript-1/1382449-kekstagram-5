const sliderField = document.querySelector('.img-upload__effect-level');
const sliderElement = sliderField.querySelector('.effect-level__slider');
const sliderElementValue = sliderField.querySelector('.effect-level__value');

const previewContainer = document.querySelector('.img-upload__preview');
const picture = previewContainer.querySelector('img');

const effectRadios = document.querySelectorAll('input[name="effect"]');

const CHROME_EFFECT_MAX_VALUE = 1;
const CHROME_EFFECT_MIN_VALUE = 0;
const CHROME_EFFECT_STEP = 0.1;

const SEPIA_EFFECT_MAX_VALUE = 1;
const SEPIA_EFFECT_MIN_VALUE = 0;
const SEPIA_EFFECT_STEP = 0.1;

const MARVIN_EFFECT_MAX_VALUE = 100;
const MARVIN_EFFECT_MIN_VALUE = 0;
const MARVIN_EFFECT_STEP = 1;

const PHOBOS_EFFECT_MAX_VALUE = 3;
const PHOBOS_EFFECT_MIN_VALUE = 0;
const PHOBOS_EFFECT_STEP = 0.1;

const HEAT_EFFECT_MAX_VALUE = 3;
const HEAT_EFFECT_MIN_VALUE = 1;
const HEAT_EFFECT_STEP = 0.1;

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
  let currentSliderValue = CHROME_EFFECT_MAX_VALUE;
  resetSlider();
  sliderField.classList.remove('hidden');
  noUiSlider.create(sliderElement, {
    range: {
      min: CHROME_EFFECT_MIN_VALUE,
      max: CHROME_EFFECT_MAX_VALUE,
    },
    start: CHROME_EFFECT_MAX_VALUE,
    step: CHROME_EFFECT_STEP,
    connect: 'lower',
  });

  sliderElement.noUiSlider.on('update', () => {
    currentSliderValue = sliderElement.noUiSlider.get();
    sliderElementValue.value = currentSliderValue;
    picture.style.filter = `grayscale(${currentSliderValue})`;
  });
};

const createSliderForSepia = () => {
  let currentSliderValue = SEPIA_EFFECT_MAX_VALUE;
  resetSlider();
  sliderField.classList.remove('hidden');
  noUiSlider.create(sliderElement, {
    range: {
      min: SEPIA_EFFECT_MIN_VALUE,
      max: SEPIA_EFFECT_MAX_VALUE,
    },
    start: SEPIA_EFFECT_MAX_VALUE,
    step: SEPIA_EFFECT_STEP,
    connect: 'lower',
  });

  sliderElement.noUiSlider.on('update', () => {
    currentSliderValue = sliderElement.noUiSlider.get();
    sliderElementValue.value = currentSliderValue;
    picture.style.filter = `sepia(${currentSliderValue})`;
  });
};

const createSliderForMarvin = () => {
  let currentSliderValue = MARVIN_EFFECT_MAX_VALUE;
  resetSlider();
  sliderField.classList.remove('hidden');
  noUiSlider.create(sliderElement, {
    range: {
      min: MARVIN_EFFECT_MIN_VALUE,
      max: MARVIN_EFFECT_MAX_VALUE,
    },
    start: MARVIN_EFFECT_MAX_VALUE,
    step: MARVIN_EFFECT_STEP,
    connect: 'lower',
  });

  sliderElement.noUiSlider.on('update', () => {
    currentSliderValue = sliderElement.noUiSlider.get();
    sliderElementValue.value = currentSliderValue;
    picture.style.filter = `invert(${currentSliderValue}%)`;
  });
};

const createSliderForPhobos = () => {
  let currentSliderValue = PHOBOS_EFFECT_MAX_VALUE;
  resetSlider();
  sliderField.classList.remove('hidden');
  noUiSlider.create(sliderElement, {
    range: {
      min: PHOBOS_EFFECT_MIN_VALUE,
      max: PHOBOS_EFFECT_MAX_VALUE,
    },
    start: PHOBOS_EFFECT_MAX_VALUE,
    step: PHOBOS_EFFECT_STEP,
    connect: 'lower',
  });

  sliderElement.noUiSlider.on('update', () => {
    currentSliderValue = sliderElement.noUiSlider.get();
    sliderElementValue.value = currentSliderValue;
    picture.style.filter = `blur(${currentSliderValue}px)`;
  });
};

const createSliderForHeat = () => {
  let currentSliderValue = HEAT_EFFECT_MAX_VALUE;
  resetSlider();
  sliderField.classList.remove('hidden');
  noUiSlider.create(sliderElement, {
    range: {
      min: HEAT_EFFECT_MIN_VALUE,
      max: HEAT_EFFECT_MAX_VALUE,
    },
    start: HEAT_EFFECT_MAX_VALUE,
    step: HEAT_EFFECT_STEP,
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

export {resetSliderToNone};

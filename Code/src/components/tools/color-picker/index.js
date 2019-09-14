export default class ColorPicker {
  constructor() {
    this.mainColorElement = document.querySelector('#color-main');
    this.secondColorElement = document.querySelector('#color-second');
    this.swapButton = document.querySelector('#swap-colors');
    this.swapButton.addEventListener('click', e => this.swapColors(e));
  }

  mainColor() {
    return this.mainColorElement.value;
  }

  secondaryColor() {
    return this.secondColorElement.value;
  }

  swapColors(e) {
    e.preventDefault();
    e.stopPropagation();
    this.temp = this.mainColor();
    this.mainColorElement.value = this.secondaryColor();
    this.secondColorElement.value = this.temp;
  }
}

import ColorPicker from './color-picker';

export default class Tools {
  constructor() {
    this.colors = new ColorPicker();
    this.activeTool = document.getElementById('pen-tool');
    this.tools = document.querySelectorAll('.tool');
    this.toolsList = document.getElementById('tools-list');
    this.swapColors = document.getElementById('swap-colors');
    this.toolsList.addEventListener('click', e => this.setActive(e));
  }

  setActive(e) {
    this.tools.forEach((element) => {
      if (element.classList.contains('active-tool')) element.classList.remove('active-tool');
    });
    e.target.classList.add('active-tool');
  }
}

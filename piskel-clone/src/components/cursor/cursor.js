export default class Cursor {
  constructor(size, cellSize) {
    this.cursor = document.getElementById('cursor');
    this.info = document.getElementById('info');
    this.cursorPosition = { left: 0, top: 0 };
    this.cursorSize = 1;
    this.size = size;
    this.cellSize = cellSize;
  }

  showCursor() {
    this.cursor.style.display = 'block';
  }

  hideCursor() {
    this.cursor.style.display = 'none';
  }

  setCursor(x, y) {
    const left = Math.trunc(x / this.cellSize);
    const top = Math.trunc(y / this.cellSize);
    if (left + 1 > this.size || top + 1 > this.size) {
      return;
    }
    if (this.cursorPosition.left !== left || this.cursorPosition.top !== top) {
      this.cursorPosition.left = left;
      this.cursorPosition.top = top;

      this.cursor.style.left = `${left * this.cellSize}px`;
      this.cursor.style.top = `${top * this.cellSize}px`;
      this.info.innerText = `${left + 1} x ${top + 1}`;
    }
  }

  setCursorSize(newSize) {
    const el = document.querySelector('.active[data-size]');
    if (el) {
      el.classList.remove('active');
    }
    const active = document.querySelector(`[data-size="${newSize}"]`);
    active.classList.add('active');
    this.cursorSize = newSize;
    this.cursor.style.width = `${this.cellSize * this.cursorSize}px`;
    this.cursor.style.height = `${this.cellSize * this.cursorSize}px`;
  }
}

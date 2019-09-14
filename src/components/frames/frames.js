export default class Frames {
  constructor(canvas) {
    this.newFrame = document.getElementById('new_frame');
    this.frames = document.getElementById('frames');
    this.delButton = document.getElementById('delete-btn');
    this.copyButton = document.getElementById('copy-btn');
    this.activeFrame = null;
    this.canvas = canvas;
    this.newFrame.addEventListener('click', () => this.addFrame());
    this.frames.addEventListener('click', e => this.setActive(e));
  }

  addFrame() {
    this.canvas.clearCanvas();
    if (this.activeFrame) {
      this.activeFrame.classList.remove('active');
    }
    this.frameWrapper = document.createElement('div');
    this.frameWrapper.classList.add('frame-wrapper');
    this.frames.insertBefore(this.frameWrapper, this.newFrame);
    this.activeFrame = document.createElement('img');
    this.activeFrame.classList.add('frame', 'active');
    this.activeFrame.setAttribute('src', this.canvas.canvas.toDataURL());
    this.frameWrapper.appendChild(this.activeFrame, this.newFrame);
    this.delButton = document.createElement('div');
    this.delButton.classList.add('frame-btn', 'delete-btn');
    this.frameWrapper.appendChild(this.delButton);
    this.copyButton = document.createElement('div');
    this.copyButton.classList.add('frame-btn', 'copy-btn');
    this.frameWrapper.appendChild(this.copyButton);
    this.delButton.addEventListener('click', e => this.deleteFrame(e));
    this.copyButton.addEventListener('click', e => this.copyFrame(e));
  }

  setActive(e) {
    if (e.target.classList.contains('frame') && !e.target.classList.contains('active')) {
      if (this.activeFrame) {
        this.activeFrame.classList.remove('active');
      }
      e.target.classList.add('active');
      this.canvas.ctx.clearRect(0, 0, this.canvas.canvas.width, this.canvas.canvas.height);
      const image = new Image();
      image.onload = () => {
        this.canvas.ctx.drawImage(image, 0, 0);
      };
      image.src = e.target.src;
      this.activeFrame = e.target;
    }
  }

  deleteFrame(e) {
    if (!e.target.parentElement.classList.contains('active')) {
      e.target.parentElement.remove();
    }
  }

  copyFrame(e) {
    if (this.activeFrame) {
      this.activeFrame.classList.remove('active');
    }
    const copy = e.target.parentElement.cloneNode(true);
    if (this.activeFrame) {
      this.activeFrame.classList.add('active');
    }
    const newFrame = this.frames.insertBefore(copy, this.newFrame);
    e.target.parentElement.classList.remove('active');
    const delButton = newFrame.querySelector('.delete-btn');
    delButton.addEventListener('click', event => this.deleteFrame(event));
    const copyButton = newFrame.querySelector('.copy-btn');
    copyButton.addEventListener('click', event => this.copyFrame(event));
  }
}

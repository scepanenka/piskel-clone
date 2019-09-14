export default class Preview {
  getPreview() {
    this.preview = document.getElementById('preview');
    return this.preview;
  }

  showRate() {
    this.fps = document.querySelector('#fps');

    this.fps.addEventListener('input', () => {
      const fpsValue = document.querySelector('#display-fps');
      fpsValue.innerHTML = this.fps.value;
    });

    return this.fps.value;
  }

  startAnimation(framesCount) {
    const frames = document.querySelectorAll('.frame');
    const fps = document.querySelector('#fps');
    const container = document.querySelector('#preview');
    let counter = framesCount;
    fps.value = parseInt(fps.value, 10);

    const fpsValue = 1000 / fps.value;

    function animateFrame(frame) {
      container.style.backgroundImage = `url("${frame.src}")`;
      return 1;
    }

    if (counter < frames.length) {
      if (fps.value != 0) {
        animateFrame(frames[counter]);
        counter += 1;
      }
    } else counter = 0;
    setTimeout(() => this.startAnimation(counter), fpsValue);
    return 1;
  }
}

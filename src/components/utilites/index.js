/* eslint-disable class-methods-use-this */

import gifshot from '../../gifshot';

export default class Utils {
  fullScreen(container) {
    if (container.fullscreenElement) {
      container.exitFullscreen();
    } else {
      container.requestFullscreen();
    }
  }

  saveGif() {
    const framesImages = document.querySelectorAll('.frame');
    const fps = document.querySelector('#fps');
    const framesImagesUrls = [];
    const imagesObject = [];

    fps.value = parseInt(fps.value, 10);

    if (fps.value === 0) return;

    const fpsValue = 1 / fps.value;

    framesImages.forEach((elem, index) => {
      framesImagesUrls[index] = elem.src;
      imagesObject[index] = { src: framesImagesUrls[index], text: '' };
    });

    gifshot.createGIF(
      {
        images: imagesObject,
        interval: fpsValue,
        frameDuration: fpsValue,
      },
      (obj) => {
        if (!obj.error) {
          const gif = [obj.image][0];
          const animatedGif = document.createElement('img');
          animatedGif.src = gif;

          const saveLink = document.createElement('a');
          saveLink.onclick = () => {
            saveLink.href = animatedGif.src;
            saveLink.target = '_blank';
            saveLink.download = 'New Sprite.gif';
          };

          saveLink.click();
        }
      },
    );
  }
}

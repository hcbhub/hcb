'use strict';
// Layer the original product artwork in the same order as the plug-in editor.
const pedal = document.querySelector('.pedal');
for (const name of ['input', 'highpass', 'drive', 'lowpass', 'output']) {
  for (const part of ['body', 'pointer']) {
    const img = document.createElement('img');
    img.src = `assets/${name}_${part}.webp`;
    img.alt = '';
    img.className = 'layer';
    img.width = 1126;
    img.height = 1360;
    if (part === 'pointer' && name === 'drive') {
      img.style.transformOrigin = `${565 / 1126 * 100}% ${485.5 / 1360 * 100}%`;
      img.style.transform = 'rotate(67.5deg)';
    }
    pedal.append(img);
  }
}
for (const player of document.querySelectorAll('audio')) {
  player.addEventListener('play', () => {
    for (const other of document.querySelectorAll('audio')) {
      if (other !== player) other.pause();
    }
  });
}

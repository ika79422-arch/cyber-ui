const statusText = document.querySelector('.ready');

let blink = true;
setInterval(() => {
  statusText.style.opacity = blink ? '0.3' : '1';
  blink = !blink;
}, 500);

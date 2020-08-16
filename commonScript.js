const el = document.querySelector('.mouse');
let lastMove = 0;

function onMouseMove (e) {
  x = e.clientX;
  y = e.clientY;
  updateMouse(x, y);
  lastMove = Date.now();
}

function updateMouse (x, y) {
	el.style.transform = `translate(${x}px, ${y}px)`;
}

function render (a) {
  requestAnimationFrame(render);
}

function clickSound() {
	document.getElementById("click-audio").currentTime = 0;
	document.getElementById("click-audio").play();
}

window.addEventListener('mousemove', onMouseMove);
window.addEventListener('click', clickSound);
requestAnimationFrame(render);
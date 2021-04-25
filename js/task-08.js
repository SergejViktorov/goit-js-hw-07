const controlsEl = document.querySelector('#controls');
const boxesEl = document.querySelector('#boxes');

const inputEl = controlsEl.firstElementChild.addEventListener('input', onInputOut);
console.dir(inputEl);

const buttonRender = controlsEl.children[1];
console.log(buttonRender);

const buttonDestroy = controlsEl.children[2];
console.log(buttonDestroy);

function onInputOut(event) {
  console.log(event.currentTarget.value);
}

// function createBoxes(amount);

buttonDestroy.addEventListener('click', onClearOutput);
function onClearOutput() {
  controlsEl.firstElementChild = '';
}

console.log();
console.log();
console.log();

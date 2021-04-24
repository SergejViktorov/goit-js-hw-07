const input = document.querySelector('#name-input')
const nameEl = document.querySelector('#name-output')

input.addEventListener('input', onInputChange)

function onInputChange(event) {
  nameEl.textContent = event.currentTarget.value
}


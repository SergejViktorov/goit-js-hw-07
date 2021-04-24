const input = document.querySelector('#name-input')
const nameEl = document.querySelector('#name-output')

input.addEventListener('input', onInputChange)

function onInputChange(event) {
  if(input.value === ''){
    return nameEl.textContent = 'незнакомец';
  }
   nameEl.textContent = event.currentTarget.value
}


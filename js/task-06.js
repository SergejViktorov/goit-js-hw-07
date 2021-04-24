const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur)
input.classList.add('#validation-input')

function onInputBlur(event) {
`${event.currentTarget.value.length}` === input.dataset.length ? 
    event.currentTarget.classList.add('valid'): input.classList.add('invalid');

        console.log(event.currentTarget.value.length)
        console.log(input.dataset.length);
        }
    

  
 
  
  
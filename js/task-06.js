const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur)
input.addEventListener('input', onInput)
input.classList.add('#validation-input')

function onInput(event){
    console.log('rt', Number(event.currentTarget.value.length))
      }

function onInputBlur(event) {
    console.log('Инпут потерял фокус - событие blur');

    event.currentTarget.value.length === input.dataset.length ? 
    event.currentTarget.classList.add('valid'): input.classList.add('invalid');
        console.log(Number(event.currentTarget.value.length))
        console.log(input.dataset.length);
        }
    

  
 
  
  
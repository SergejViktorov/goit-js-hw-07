const input = document.querySelector('#validation-input');
input.addEventListener('focus', onInputFocus)
input.addEventListener('blur', onInputBlur)





function onInputFocus (){
    console.log('Инпут получил фокус - событие focus');
};
function onInputBlur() {
    console.log('Инпут потерял фокус - событие blur');
  }
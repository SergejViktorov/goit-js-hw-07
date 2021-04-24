const input = document.querySelector('#font-size-control');
console.log(input)
const text = document.querySelector('#text');
console.log(text)

input.addEventListener('input', onInput);
function onInput(event){
text.style.fontSize = `${event.currentTarget.value}px`
}
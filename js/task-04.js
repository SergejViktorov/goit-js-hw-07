const counterValue ={
value: 0,
increment(){
    this.value +=1;
},
decrement(){
    this.value -=1;
},
};
const valueEl = document.querySelector('#value');
const buttonsEl = document.querySelectorAll('#counter button');
const incrementBtn = buttonsEl[1];
const decrementBtn = buttonsEl[0];

incrementBtn.addEventListener('click',function ()  {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
})

decrementBtn.addEventListener('click',() =>{
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
}) 
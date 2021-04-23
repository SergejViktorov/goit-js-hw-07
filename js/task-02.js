const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
console.log(ingredients);

  const ingredientsElement = document.querySelector('ul#ingredients');
  console.log(ingredientsElement);

  const li = document.createElement('li');
  ingredientsElement.appendChild(li)
  
  ingredients.map(element => li.appendChild(element.textContent) )
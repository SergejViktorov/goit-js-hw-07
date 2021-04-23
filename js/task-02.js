const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientsElement = document.querySelector('ul#ingredients');
   

  const elements = ingredients.map(element =>{
    const itemEl = document.createElement('li');
    itemEl.textContent = element;
    return itemEl;
  });

  ingredientsElement.append(...elements)
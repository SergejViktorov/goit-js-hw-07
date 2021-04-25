const categories = document.querySelector('ul#categories');
const categoriesItem = categories.querySelectorAll('li.item');
console.log('Количество категорий:', categoriesItem.length);

categoriesItem.forEach(item => {
	console.log('Категория:', item.firstElementChild.textContent);
	console.log('Количество элементов:', item.lastElementChild.children.length);
});

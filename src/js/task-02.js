const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientsHTML = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join('');

ingredientsList.insertAdjacentHTML('beforeend', ingredientsHTML);
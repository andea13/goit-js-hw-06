const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let ingredientsList = document.querySelector("#ingredients");

const list = [];
for (let ingredient of ingredients) {
  const listEl = document.createElement("li");
  listEl.textContent = ingredient;
  listEl.classList.add("item");
  list.push(listEl);
}

ingredientsList.append(...list);

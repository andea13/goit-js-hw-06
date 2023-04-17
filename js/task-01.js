const categories = document.querySelectorAll("#categories li.item");
const categoriesNum = categories.length;
console.log(`Number of categories: ${categoriesNum}`);

categories.forEach(function (category, index, arr) {
  let header = category.querySelector("h2");
  console.log(`Category: ${header.textContent}`);
  let elements = category.querySelectorAll("li");
  console.log(`Elements: ${elements.length}`);
});

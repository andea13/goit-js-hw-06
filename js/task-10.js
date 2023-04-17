function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  controls: document.querySelector("#controls"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesContainer: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", createBoxes);
// refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let outputValue = refs.controls.children[0].value;
  amount = +outputValue;
  let oneDiv = document.createElement("div");
  console.log(oneDiv);
  let markup = `${oneDiv} * ${amount}`;
  const addedDivs = refs.boxesContainer.insertAdjacentHTML(
    "afterbegin",
    markup
  );
  // let numberOfDivsToCreate = addedDiv * outputValue;
  // console.log(numberOfDivsToCreate.append);
  // console.log(addedDiv);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onChangeColorButtonClick = document.querySelector(".change-color");
const onColorValueDisplay = document.querySelector(".color");
const onBodyBackgroundColorDisplay = document.querySelector("body");

onChangeColorButtonClick.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor(event) {
  onColorValueDisplay.textContent = getRandomHexColor();
  onBodyBackgroundColorDisplay.style.backgroundColor =
    onColorValueDisplay.textContent;
}

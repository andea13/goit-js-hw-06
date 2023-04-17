const sizeControlInput = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

sizeControlInput.addEventListener("input", checkInput);

function checkInput(event) {
  console.log(event.target.value);
  inputText.style.fontSize = event.target.value + "px";
}

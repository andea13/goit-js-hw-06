const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  let outputValue;
  //   console.log(event.currentTarget.value);
  if (event.currentTarget.value !== "") {
    outputValue = event.currentTarget.value.trim();
  } else {
    outputValue = "Anonymous";
  }

  refs.output.textContent = outputValue;
}

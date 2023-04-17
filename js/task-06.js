const input = document.querySelector("#validation-input");

input.addEventListener("blur", checkLength);

function checkLength(event) {
  let lengthFromDataset = input.dataset.length;

  if (event.currentTarget.value.length === +lengthFromDataset) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
}

// + = Number();

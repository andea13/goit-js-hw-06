const refs = {
  onDecrementBtn: document.querySelector("[data-action = decrement]"),
  onIncrementBtn: document.querySelector("[data-action = increment]"),
  counter: document.querySelector("#value"),
  counterValue: 0,
};

refs.onIncrementBtn.addEventListener("click", addOne);
refs.onDecrementBtn.addEventListener("click", subtractOne);

function addOne() {
  refs.counterValue += 1;
  refs.counter.textContent = refs.counterValue;
  console.log(refs.counterValue);
}

function subtractOne() {
  refs.counterValue -= 1;
  refs.counter.textContent = refs.counterValue;
  console.log(refs.counterValue);
}

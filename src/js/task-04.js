
const value = document.querySelector("#value");
const clickIncrement = document.querySelector('button[data-action="increment"]')
const clickDecrement = document.querySelector('button[data-action="decrement"]')


clickIncrement.addEventListener("click", handleClickIncrement);
clickDecrement.addEventListener("click", handleClickDecrement);

let counterValue = 0;

function handleClickIncrement() {
  counterValue += 1;
  value.textContent = counterValue;
}

function handleClickDecrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}


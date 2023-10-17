function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");

input.addEventListener("input", handlerValue);

function createBoxes(amount) {
  buttonCreate.addEventListener("click", handlerCreateInput);
  buttonDestroy.addEventListener("click", handlerDestroyInput);

  let width = 30;
  let height = 30;
  
function handlerCreateInput() {
  width += 10;
  height += 10;

  boxes.insertAdjacentHTML(
    "beforeend",
    `<div style=width:${width}px;height:${height}px;background-color:${getRandomHexColor()} ></div>`
  )
}

function handlerDestroyInput() {
  boxes.innerHTML = '';
  }  
}
 
function handlerValue(evt) {
  createBoxes(evt.currentTarget.value)
}
const inputSize = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

inputSize.addEventListener("input", handlerSize);
let fontSize = 16;

function handlerSize() {
  let newSize = parseInt(inputSize.value);
  textSize.style.fontSize = `${newSize}px`;
}

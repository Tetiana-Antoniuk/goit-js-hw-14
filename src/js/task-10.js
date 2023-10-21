function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const input = document.querySelector("input");
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector("#boxes");

buttonCreate.addEventListener("click", () => createBoxes(input.value));
buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = parseInt(amount, 10);
  if (amount > 0 && amount <= 100) {
    const boxSize = 30;
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${boxSize + i * 10}px`;
      box.style.height = `${boxSize + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.appendChild(box);
    }
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
};

function destroyBoxes() {
  boxes.innerHTML = '';
};
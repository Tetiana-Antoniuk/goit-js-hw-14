function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const color = document.querySelector(".color");
const buttonColor = document.querySelector(".change-color");
const body = document.querySelector("body");

buttonColor.addEventListener("click", handlerClick);

function handlerClick() {
  color.textContent = getRandomHexColor()
  body.setAttribute("style", `background-color:${getRandomHexColor()}`)
};

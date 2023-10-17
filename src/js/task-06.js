
  const input = document.querySelector("#validation-input");

  const inputLength = input.getAttribute('data-length')
  input.addEventListener("blur", handlerValidation);

function handlerValidation(evt) {
  if ((evt.currentTarget.value).length <= inputLength) {
   input.classList.add("valid")
  } else {
    input.classList.add("invalid")
  }
}


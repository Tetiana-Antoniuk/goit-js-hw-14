
  const input = document.querySelector("#validation-input");

const inputLength = input.getAttribute('data-length');
  input.addEventListener("blur", handlerValidation);

function handlerValidation(evt) {
  const inputToNumber = parseInt(inputLength);
  if ((evt.currentTarget.value).length === inputToNumber) {
    input.classList.add("valid");
    input.classList.remove("invalid");
    
  } else {
    input.classList.add("invalid");
     input.classList.remove("valid");
  }
}


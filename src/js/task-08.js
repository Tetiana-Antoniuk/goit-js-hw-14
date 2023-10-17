const formSubmit = document.querySelector(".login-form");

formSubmit.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;

  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);

  if (!data.email|| !data.password) {
    alert("Please fill fields")
  };

  document.querySelector(".login-form").reset();
};


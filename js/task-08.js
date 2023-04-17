const refs = {
  formSubmit: document.querySelector(".login-form"),
};

refs.formSubmit.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;

  console.log(mail, password);
  const formData = {
    mail,
    password,
  };

  if (mail === "" || password === "") {
    return alert("Всі поля повинні бути заповнені!");
  }
  console.log(formData);
  refs.formSubmit.reset();
}

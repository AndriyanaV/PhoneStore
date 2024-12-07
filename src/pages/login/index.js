const passwordField = document.getElementById("password");
const emailField = document.getElementById("email");

function validation(event) {
  
  event.preventDefault();
  const email = document.getElementById("email").value;
  const passwordError = document.getElementById("passwordError");
  const mailError = document.getElementById("mailError");
  const errorOutline = document.querySelectorAll("input");
  const password = document.getElementById("password").value;
  const eyeButton = document.getElementById("eye-button");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  passwordError.style.visibility = "hidden";
  mailError.style.visibility = "hidden";
  errorOutline[0].style.borderColor = "black";
  errorOutline[1].style.borderColor = "black";

  function oneUpperCase(password) {

    const regexUpperCase = /[A-Z]/;
    return regexUpperCase.test(password);
  }

  function numberIn(password) {
    const regexNumberIn = /.*[1-9].*/;
    return regexNumberIn.test(password);
  }

  function errorInMail(txt) {

    mailError.style.visibility = "visible";
    mailError.style.display="block"
    mailError.innerText = txt;
    emailField.style.border = "1px solid red";
  }

  function errorInPassword(txt) {

    passwordError.style.visibility = "visible";
    passwordError.style.display="block"
    passwordError.innerText = txt;
    passwordField.style.border = "1px solid red";
    eyeButton.style.border = "1px solid red";
    eyeButton.style.borderLeft = "none";
  }

  if (email === "") {
    errorInMail("Please enter your email adress!");
    return;
  }
  if (!emailRegex.test(email)) {
    errorInMail("Your email address is not in the correct format!");
    return;
  }

  if (password === "") {
    errorInPassword("Please enter your password!");
    return;
  }
  if (password.length < 3) {
    errorInPassword("The password must have a minimum of three characters!");
    return;
  }
  if (!oneUpperCase(password)) {
    errorInPassword("The password must contain at least one uppercase letter!");
    return;
  }
  if (!numberIn(password)) {
    errorInPassword("The password must contain at least one number!");
    return;
  }

  window.location.href = "/pages/homepage";
}

function seePassword(event) {
  event.preventDefault();

  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}

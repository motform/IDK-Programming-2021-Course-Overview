/* 
 * 3. Form Validation
 * 
 * We will go over this code in class, with a live demo.
 * TASK: annotate the code with comments, explaning each line in your own words.
 * 
 */

const inputUsername = document.querySelector("#form-validation-username");
const feedbackUsername = document.querySelector("#form-validation-feedback-username");
let usernameCorrect = false;

const inputPassword = document.querySelector("#form-validation-password");
const feedbackPassword = document.querySelector("#form-validation-feedback-password");
let passwordCorrect = false;

const inputSubmit = document.querySelector("#form-validation-submit");

// The username input
inputUsername.addEventListener("input", (event) => {
  const userInput = event.target.value; // This is how we get the thing the user changed.

  if (userInput.length < 5) {
    inputUsername.classList.add("widget-input-error");
    feedbackUsername.classList.add("widget-input-error");
    usernameCorrect = false;
  } else {
    inputUsername.classList.remove("widget-input-error");
    feedbackUsername.classList.remove("widget-input-error");
    usernameCorrect = true;
  }

  if (usernameCorrect && passwordCorrect) {
    inputSubmit.disabled = false;
  } else {
    inputSubmit.disabled = true;
  }
});

// The password input
inputPassword.addEventListener("input", (event) => {
  const userInput = event.target.value;

  if (userInput.length < 10 || userInput.length > 20) {
    feedbackPassword.classList.add("widget-input-error");
    inputPassword.classList.add("widget-input-error");
    passwordCorrect = false;
  } else {
    feedbackPassword.classList.remove("widget-input-error");
    inputPassword.classList.remove("widget-input-error");
    passwordCorrect = true;
  }

  if (usernameCorrect && passwordCorrect) {
    inputSubmit.disabled = false;
  } else {
    inputSubmit.disabled = true;
  }
});

/* 
 * 5. EULA, expert mode
 * 
 * Legal has decreed that we have to make sure that ours users indeed
 * read the EULA, whatever it takes.
 *
 * The EULA widget displays a section of the EULA. The user confirms
 * their understanding of the agreement by laboriously re-typing the
 * EULA, character by charcter. Only problem is, the EULA fades out of
 * view once the textarea is in focus.
 *
 * TASK: 
 * - Set the first part of the EULA (the variable `eula`) as the content of `eulaText`.
 * - Make the EULA fade in and out:
 *   + Add event listeners for "focus" (selecting) and "focusout" (de-selecting) to `eulaTextArea`.
 *   + Add the class `eula-dim` (pre-defined in the css stylesheet) to `eulaText` when `eulaTextArea` is in focus.
 *   + Remove the class `eula-dim` (pre-defined in the css stylesheet) to `eulaText` when `eulaTextArea` out of focus.
 * - Make the buttons work:
 *   + The "conform" button should check if the user's input matches `eula`:
 *     - If it does, then it should add the reset the text field, congratulate the user and replace the first part of `eulaText` with the second (`eula2`). (HINT: try using the `alert` function, it takes a string, i.e. `alert("Error!")`, but this only works when running the preview in the browser).
 *     - If it does not, then it should alert the user that they where incorrect and then reset the input field (we have to make sure that they take this seriously).
 *   + The "cancel" button should inform the user that they are unable to cancel the operation unless the user first confirms to the EULA. The way this works is up to you.
 *
 * Additionaly, if you have the time:
 * - Add a visible counter the amount of letters the user has typed. (HINT: strings have a .length property)
 * - Add a max number of letters that is just a bit over the total amount of the eula, we don't want to give the user too much leeway for mistakes. (HINT: There is an event called "input" that fires when the users edits the input of a <textarea>, <select> or <input>.)
 * - Reset the textArea if the user hits he max.
 *  
 */

// This is the first part of the EULA
const eula = "The Licence Agreement sets forth the terms and conditions under which the Customer may (1) use the Licensor's proprietary softare (the Licensed Softare/Subscribed Software) that is specifically licensed to the Customer persuant to the Quote.";

// This is the second part of the EULA, which is used for the advanced level exercise
const eula2 = "The Licence Agreement sets forth that the Customer must (2) use the user documentation that Licensor makes generally available in hard copy or electronic form to its general customer base in conjunction with the licensing of such Applications.";

const eulaText = document.querySelector("#eula-text");
const eulaButtonCancel = document.querySelector("#eula-button-cancel");
const eulaButtonConfirm = document.querySelector("#eula-button-confirm");
const eulaTextArea = document.querySelector("#eula-input-textarea");

eulaText.innerHTML = eula;


/* These two events prevent the user from selecting the EULA text by
   stopping the regular/default event behaviour of "selectionchange"
   (editing a mouse selection) and "pointerdown" (dragging the mouse
   cursor to select the text) */
eulaText.addEventListener("selectionchange", (event) => {
  event.preventDefault();
});

eulaText.addEventListener("pointerdown", (event) => {
  event.preventDefault();
});


/* Focus/focusout events for when the user selects `eulaTextArea` */
eulaTextArea.addEventListener("focus", (event) => {
  eulaText.classList.add("eula-dim");
});

eulaTextArea.addEventListener("focusout", (event) => {
  eulaText.classList.remove("eula-dim");
});


/* This is where you should add events for buttons. */
eulaButtonConfirm.addEventListener("pointerdown", (event) => {
  const userInput = eulaTextArea.value;

  if (userInput === eula) {
    alert("Please proceed to the next part of the EULA.");
    eulaText.innerHTML = eula2;
    eula = eula2;
  } else {
    alert("The EULA does no match. Please try again.");
  }

  eulaTextArea.value = "";
});

/* There is already a counter elements for you in the HTML, but you have to show it and add in your counter variable. */
const eulaInputCounter = document.querySelector("#eula-input-counter");
eulaInputCounter.style.display = "flex";

const maxInputs = eula.length + 20;
let currentInputs = 0;
eulaInputCounter.innerHTML = currentInputs + "/" + maxInputs;

eulaTextArea.addEventListener("input", (event) => {
  currentInputs += 1;
  eulaInputCounter.innerHTML = currentInputs + "/" + maxInputs; 

  if (currentInputs > maxInputs) {
    alert("You have reached the maximum allowed inputs, please try again.");
    eulaTextArea.value = "";
    currentInputs = 0;
  }
});



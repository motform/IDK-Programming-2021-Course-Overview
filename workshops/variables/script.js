/* 
 * 02 - Variables, Selecting buttons
 * 
 *  — Love Lagerkvist, 2021-10-21
 */

"use strict"; // We want to get some help from the strict mode to catch errors.



/* First, set your name! */


let studentName = document.querySelector("#student-name");
studentName.innerHTML = "???"; // Fill in your name!




/* 
 * 1. Counter 
 * 
 * We will go over this code in class, with a live demo.
 * TASK: annotate the code with comments, explaning every line in your own words.
 * 
 */

let buttonIncrement = document.querySelector("#counter-body-button-increment");
let buttonDecrement = document.querySelector("#counter-body-button-decrement");
let counterNumber   = document.querySelector("#counter-body-number");

buttonIncrement.onclick = function() {
  let oldNumber = Number.parseInt(counterNumber.innerHTML); 
  let newNumber = oldNumber + 1;
  counterNumber.innerHTML = newNumber;
};

buttonDecrement.onclick = function() {
  let oldNumber = Number.parseInt(counterNumber.innerHTML);
  let newNumber = oldNumber - 1;
  counterNumber.innerHTML = newNumber;
};


/* 
 * 2. Juggler 
 * 
 * Do this one in smaller groups or alone, uncommenting the code as you go.
 * TASK: Read the comment for each line, then uncomment and fix the code.
 * The juggler should store a "ball" variable (a string) which it "juggles" from button to button.
 * Clicking on the first button should send it over to the second one, and vice versa.
 * 
 */

// Select the first button & put it in a variable:
// HINT: you will have to go into the HTML and find the ID of each button, then make a selector as a string.
// let ___ = document.querySelector(___);

// Select the second button & put it in a variable:
// let ___ = document.querySelector(___);

// Make a variable for the "ball"
// HINT: look at the code above you to see how you make variables.
// ___;

// Add behaviour to the first button, we want to pass on the ball to the second button:
/*
___.onclick = function() {
  // Set the contents of the first button, should be empty
  ___.innerHTML = ___;

  // Set the contents of the second button, should have the ball
  ___.innerHTML = ___;
};
*/

// Add behaviour to the second button, we want to pass on the ball to the first button:
/*
___.onclick = function() {
  // Set the contents of the second button, should be empty
  ___.innerHTML = ___;

  // Set the contents of the first button, should have the ball
  ___.innerHTML = ___;
};
*/


/* 
 * 3. Stringer 
 * 
 * Do this one in smaller groups or alone, uncommenting the code as you go.
 * TASK: You will need too:
 *   - Make a variable for the "add" button
 *   - Make variable for the paragraph where the strings shows up
 *   - Add an onclick event to the "add" button where you
 *     + Update the `stringerString`
 *     + Update the paragraph where the string shows up using `stringerString`
 * 
 *  Additionaly, if you have time, you should also
 *   - Add an onclick event for the "clear button", which,
 *     + Clears `stringerString` by setting it to the empty string
 *     + Clears the paragraph where the string shows up
 */

let stringerString = "S";
let characterInput = document.querySelector("#stringer-input-character");

/*
  ___.onclick = function() {
  let newCharacter = characterInput.value;  // Get the character that is in the input
  ___.innerHTML = ___; // Set the contents of the second button, should be empty

  // Set the contents of the first button, should have the ball
  ___.innerHTML = ___;
  characterInput.value = "";  // Clear the input
  };
*/

"use strict"; // We want to get some help from the strict mode to catch errors.

/* 
 * 1. Counter 
 * 
 * We will go over this code in class, with a live demo.
 * TASK: annotate the code with comments, explaning each line in your own words.
 * 
 */

let buttonIncrement = document.querySelector("#counter-body-button-increment");
let buttonDecrement = document.querySelector("#counter-body-button-decrement");
let counterNumber   = document.querySelector("#counter-body-number");

buttonIncrement.addEventListener("pointerdown", () => {
  let oldNumber = Number.parseInt(counterNumber.innerHTML); 
  let newNumber = oldNumber + 1;
  counterNumber.innerHTML = newNumber;
});

buttonDecrement.addEventListener("pointerdown", () => {
  let oldNumber = Number.parseInt(counterNumber.innerHTML);
  let newNumber = oldNumber - 1;
  counterNumber.innerHTML = newNumber;
});

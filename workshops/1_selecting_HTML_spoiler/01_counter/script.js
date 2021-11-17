

"use strict"; // We want to get some help from the strict mode to catch errors.

/* 
 * 1. Counter 
 * 
 * This is the completed, spoiler version of the exercise.
 * You can use it to get hints, check or annotate the exercise.
 *
 */


const buttonIncrement = document.querySelector("#counter-body-button-increment");
const buttonDecrement = document.querySelector("#counter-body-button-decrement");
const counterNumber = document.querySelector("#counter-body-number");

buttonIncrement.addEventListener("pointerdown", () => {
    const oldNumber = Number.parseInt(counterNumber.innerHTML);
    const newNumber = oldNumber + 1;
    counterNumber.innerHTML = newNumber;
});

buttonDecrement.addEventListener("pointerdown", () => {
    counterNumber.innerHTML = Number.parseInt(counterNumber.innerHTML) - 1;
});

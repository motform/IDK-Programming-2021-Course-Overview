"use strict";

/*
 * 2. Juggler
 *
 * This is the completed, spoiler version of the exercise.
 * You can use it to get hints, check or annotate the exercise.
 *
 */

// Select the first button & put it in a variable:
// HINT: you will have to go into the HTML and find the ID of each button, then make a selector as a string.
const firstButton = document.querySelector("#juggler-body-button-first");

// Select the second button & put it in a variable:
const secondButton = document.querySelector("#juggler-body-button-second");

// Make a variable for the "ball"
// HINT: look at the code above you to see how you make variables.
const ball = "🏀";

// Add behaviour to the first button, we want to pass on the ball to the second button:
firstButton.addEventListener("pointerdown", (event) => {
    console.log(event);
    // Set the contents of the first button, should be empty
    firstButton.innerHTML = "";

    // Set the contents of the second button, should have the ball
    secondButton.innerHTML = ball;
});


// Add behaviour to the second button, we want to pass on the ball to the first button:
secondButton.addEventListener("pointerdown", () => {
    // Set the contents of the second button, should be empty
    secondButton.innerHTML = "";

    // Set the contents of the first button, should have the ball
    firstButton.innerHTML = ball;
});

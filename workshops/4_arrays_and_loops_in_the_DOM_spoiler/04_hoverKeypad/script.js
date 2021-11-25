/* 
 * 4. Hover Keypad
 * 
 * TASK: Your task is to create a widget that displays a numeric 
 * keypad. However, keypads are boring and require clicking, eek!
 * We want to make a keypad that registers the number when you 
 * hover over it, reducing the tangiable load of the user. We probably
 * want a few clear buttons in there to make sure that the user does 
 * not get stuck. You can watch the start of my demo to get an example.
 * 
 * You will have to add any HTML & CSS yourself. Don't worry if
 * you can't make it, this is a though one! Check out my walkthrough
 * video and try to understand what is going on if you get stuck.
 * 
 * You are free to structure your process as you wish, but I did it like:
 * 
 * 1. Add the HTML & CSS to make a static, non-interactive mockup
 * 2. Replace the HTML with calls to `createElement` and `append`, 
 *    using an array and a `for...of` loop to iterate over the numbers
 * 3. Add an event listener that fiers on hover. You probably want to use
 *    the event called "pointerover".
 * 4. Make sure that the event listener updates a display of the input numbers.
 * 5. Add "clear" buttons that reset the display.
 * 
 * ----------------------------------------------------------------------
 * 
 * EXTRA: Add a confirm button that submits the 
 * phone number, checking that it is correct. What 
 * is "correct"? Well, that is up to you!
 */

const keypad = document.querySelector("#keypad");
const keypadDisplay = document.querySelector("#keypad-display");
const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, "+", 0, "*"];
let globalInput = "";

const makeClear = () => {
    const clearElement = document.createElement("div");
    clearElement.classList.add("keypad-clear", "keypad-key", "rounded", "shadow-medium");
    clearElement.innerHTML = "Clear";

    clearElement.addEventListener("pointerover", (event) => {
        globalInput = "";
        keypadDisplay.innerHTML = globalInput;
    });

    keypad.append(clearElement);
}

const makeKey = (key) => {
    const keyElement = document.createElement("div");
    keyElement.classList.add("keypad-key", "rounded", "shadow-medium");
    keyElement.innerHTML = key;

    keyElement.addEventListener("pointerover", (event) => {
        globalInput += key;
        keypadDisplay.innerHTML = globalInput;
    });

    keypad.append(keyElement);
};

let insertClearWhenThree = 0;
for (const key of keys) {
    insertClearWhenThree++;
    makeKey(key);
    if (insertClearWhenThree === 3) {
        makeClear();
        insertClearWhenThree = 0;
    }
}
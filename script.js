/* 
  A simple Javascript template for all your
  — Love Lagerkvist, 2021-10-19
*/

"use strict";


/* Varirables - Counter */

let buttonIncrement = document.querySelector("#counter-body-button-increment");
let buttonDecrement = document.querySelector("#counter-body-button-decrement");
let counterNumber = document.querySelector("#counter-body-number");

buttonIncrement.addEventListener("click", function () {
    let oldNumber = Number.parseInt(counterNumber.innerHTML);
    let newNumber = oldNumber + 1;
    counterNumber.innerHTML = newNumber;
});

buttonDecrement.addEventListener("click", function () {
    let oldNumber = Number.parseInt(counterNumber.innerHTML);
    let newNumber = oldNumber - 1;
    counterNumber.innerHTML = newNumber;
});


/* Conditions - Form Validation */

let inputUsername = document.querySelector("#form-validation-username");
let feedbackUsername = document.querySelector("#form-validation-feedback-username");
let usernameCorrect = false;

let inputPassword = document.querySelector("#form-validation-password");
let feedbackPassword = document.querySelector("#form-validation-feedback-password");
let passwordCorrect = false;

let inputSubmit = document.querySelector("#form-validation-submit");

// The username input
inputUsername.addEventListener("input", function (event) {
    let userInput = event.target.value; // This is how we get the thing the user changed.

    if (userInput.length < 5) {
        feedbackUsername.classList.add("widget-input-error");
        usernameCorrect = false;
    } else {
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
inputPassword.addEventListener("input", function (event) {
    let userInput = event.target.value;

    if (userInput.length < 10 || userInput.length > 20) {
        feedbackPassword.classList.add("widget-input-error");
        inputPassword.classList.add("widget-input-error");
        passwordCorrect = false;
    } else {
        feedbackPassword.classList.remove("widget-input-error");
        passwordCorrect = true;
    }

    if (usernameCorrect && passwordCorrect) {
        inputSubmit.disabled = false;
    } else {
        inputSubmit.disabled = true;
    }
});


/* Functions - DOM Manipulation */

let addTodoButton = document.querySelector("#dom-manipulation-input-button");
let addTodoInput = document.querySelector("#dom-manipulation-input-text");
let todoList = document.querySelector("#dom-manipulation-todo-list");

function removeTodoItem(event) {
    let item = event.target;
    item.remove();
}

function addTodoItem(event) {
    // If the event is a a keyboard input and it is anything but the enter key, return
    if (event.type === "keyup" && !(event.keyCode === 13)) return;

    let itemText = addTodoInput.value;
    let newListItem = document.createElement("li");
    newListItem.innerHTML = itemText;
    newListItem.addEventListener("click", removeTodoItem);

    todoList.append(newListItem);
    addTodoInput.value = ""; // Reset the input field
}

addTodoButton.addEventListener("click", addTodoItem);
addTodoInput.addEventListener("keyup", addTodoItem);

// Add the eventLister to the placeholders
for (let todoItem of todoList.children) {
    todoItem.addEventListener("click", removeTodoItem);
}


/* Arrays & Loops */

// Start of cryptic(?) helper functions:

// Equation source: https://maketintsandshades.com/about
// The numbers are allowed to overshoot as most browsers handle >255 as 255.
function tintRGBColor(RGBColor, amount) {
    return [
        Math.floor(Number.parseInt(RGBColor[0]) + ((255 - 102) * amount)),
        Math.floor(Number.parseInt(RGBColor[1]) + ((255 - 51) * amount)),
        Math.floor(Number.parseInt(RGBColor[2]) + ((255 - 153) * amount))
    ];
}

function RGBString(RGBColor) {
    return "rgb(" + RGBColor[0] + ", " + RGBColor[1] + ", " + RGBColor[2] + ")";
}

// End of cryptic helper functions.

let colorInputs = document.querySelectorAll(".color-generator-input");
let colorSwatches = document.querySelectorAll(".color-generator-swatch");
let RGBColor = ["50", "50", "110"];

// Listen for input-events on all of the color.
for (let i = 0; i < colorInputs.length; i++) {
    colorInputs[i].addEventListener("input", function (event) {
        RGBColor[i] = event.target.value, 255; // handle >255 user inputs

        let amount = 0.1;
        for (let colorSwatch of colorSwatches) {
            let nextTint = tintRGBColor(RGBColor, amount);
            colorSwatch.style.backgroundColor = RGBString(nextTint);
            amount += 0.2;
        }
    });
}

// Run the tinting once to get the starting colors
{
    let amount = 0.1;
    for (let colorSwatch of colorSwatches) {
        let nextTint = tintRGBColor(RGBColor, amount);
        colorSwatch.style.backgroundColor = RGBString(nextTint);
        amount += 0.2;
    }
}


/* Objects - Dealing with Complex Data */

// We represent our contact as a nested object created in literal form
let contacts = {
    bill: {
        name: "Bill Buxton",
        workplace: "Microsoft Research",
        note: "Sketching since 1949",
        phone: "714-878-8687",
        email: "sketcher@example.com",
    },
    lucy: {
        name: "Lucy Suchman",
        workplace: "Xerox Parc",
        note: "HCI Anthropologist Emeritus",
        phone: "650-858-1382",
        email: "turbocopies@example.com",
    },
    wendy: {
        name: "WHK Chun",
        workplace: "Simon Fraser University",
        note: "Media Studies Mastermind",
        phone: "323-288-2299",
        email: "mediamatter@example.com",
    },
    william: {
        name: "William Gaver",
        workplace: "RCA London",
        note: "Foremost Prober",
        phone: "925-664-0799",
        email: "culturalpoke@example.com",
    },
};

let contactDropdown = document.querySelector("#contact-card-dropdown");

contactDropdown.addEventListener("change", function (event) {
    let selectedContact = contacts[event.target.value];
    document.querySelector("#contact-card-name").innerHTML = selectedContact.name;
    document.querySelector("#contact-card-workplace").innerHTML = selectedContact.workplace;
    document.querySelector("#contact-card-note").innerHTML = selectedContact.note;
    document.querySelector("#contact-card-email").innerHTML = selectedContact.email;
    document.querySelector("#contact-card-phone").innerHTML = selectedContact.phone;
});


/* Events - Manipulating Time */

let draggable = document.querySelector("#event-header");
let draggableWidget = document.querySelector("#event");

let draggableState = {
    dragging: false,
    initial: { x: null, y: null },
    current: { x: null, y: null },
    offset: { x: 0, y: 0 },
};

function dragStart(event) {
    event.preventDefault();
    draggableState.initial.x = event.clientX - draggableState.offset.x;
    draggableState.initial.y = event.clientY - draggableState.offset.y;
    draggableState.dragging = true;
}

function dragEnd(event) {
    draggableState.initial.x = draggableState.current.x;
    draggableState.initial.y = draggableState.current.y;
    draggableState.dragging = false;
}

function translateElement(vector2, element) {
    element.style.transform = `translate3d(${vector2.x}px, ${vector2.y}px, 0)`;
}

function drag(event) {
    if (draggableState.dragging) {
        event.preventDefault();

        draggableState.current.x = event.clientX - draggableState.initial.x;
        draggableState.current.y = event.clientY - draggableState.initial.y;

        draggableState.offset.x = draggableState.current.x;
        draggableState.offset.y = draggableState.current.y;

        translateElement(draggableState.current, draggableWidget);
    }
}

draggable.addEventListener("mousedown", dragStart);
draggable.addEventListener("mouseup", dragEnd);
draggable.addEventListener("mousemove", drag);
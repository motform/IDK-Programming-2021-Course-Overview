"use strict";

/* 
 * 1. TODO List
 *
 * We will go over this code in class, with a live demo.
 * TASK: annotate the code with comments, explaning each line in your own words.
 *
 * EXTRA:
 * The widget does not handle the case of the an empty todo list very well,
 * try to remove all the items and you will see what I mean.
 * Add functionality to cover this "edge case". You could either use CSS to 
 * conditionally show and hide an "empty list"-element, or you could programatically
 * add/remove an "empty list" element by creating and destroying DOM nodes.
 *
 */

const addTodoButton = document.querySelector("#dom-manipulation-input-button");
const addTodoInput = document.querySelector("#dom-manipulation-input-text");
const todoList = document.querySelector("#dom-manipulation-todo-list");

// This is a nice, generic event callback that removes the target element.
// Keep it in your stach of useful functions!
const removeItem = (event) => {
    const item = event.target;
    item.remove();
};

const addTodoItem = (event) => {
    console.log(event);
    if (event.type === "keydown" && !(event.code === "Enter")) {
        return;
    }

    const itemText = addTodoInput.value;
    if (itemText.length === 0) {
        return;
    }

    const newListItem = document.createElement("li");
    newListItem.innerHTML = itemText;
    newListItem.addEventListener("pointerdown", removeItem);

    todoList.append(newListItem);
    addTodoInput.value = ""; // Reset the input field
};

addTodoButton.addEventListener("pointerdown", addTodoItem);
addTodoInput.addEventListener("keydown", addTodoItem);

// Add the eventLister to the placeholders using a loop, a construct
// that we will meet next week!
for (const todoItem of todoList.children) {
    todoItem.addEventListener("pointerdown", removeItem);
}

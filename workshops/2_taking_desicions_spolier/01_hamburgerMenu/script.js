"use strict";

/* 
 * 1. Hamburger Menu
 * 
 * We will go over this code in class as an example of how we can think about 
 * methods for modelling GUI. As such, this code is more reference than task.
 * 
 */

const hamburgerButton = document.querySelector("#hamburger-button");
const hamburgerIconOpen = document.querySelector("#hamburger-icon-open");
const hamburgerIconClose = document.querySelector("#hamburger-icon-close");
const hamburgerMenu = document.querySelector("#hamburger-menu");
let hamburgerMenuIsShowing = false;

hamburgerButton.addEventListener("pointerdown", (event) => {
  if (hamburgerMenuIsShowing) {
    hamburgerMenu.style.display = "none";
    hamburgerMenuIsShowing = false;

    hamburgerIconOpen.classList.remove("hide");
    hamburgerIconClose.classList.add("hide");
  } else {
    hamburgerMenu.style.display = "flex";
    hamburgerMenuIsShowing = true;

    hamburgerIconOpen.classList.add("hide");
    hamburgerIconClose.classList.remove("hide");
  }
});

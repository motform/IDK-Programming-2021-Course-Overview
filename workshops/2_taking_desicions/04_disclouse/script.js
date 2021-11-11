/* 
 * 3. Form Validation
 * 
 * We will go over this code in class, with a live demo.
 * TASK: fill in the blanks to make the widget work.
 * We are looking for a behaviour where a click on the disclosure button/header
 * reveals the text in the disclosure panel. Follow the comments!
 * 
 */

const refundButton = document.querySelector("#disclosure-refund-button");
const refundChevronUp = document.querySelector("#disclosure-refund-chevron-up");
const refundChevronDown = document.querySelector("#disclosure-refund-chevron-down");
const refundPanel = document.querySelector("#disclosure-refund-panel");

refundButton.addEventListener("pointerdown", (event) => {
  if (refundPanel.classList.contains("hide")) {
    refundPanel.classList.remove("hide");
    refundChevronDown.classList.add("hide");
    refundChevronUp.classList.remove("hide");
  } else {
    refundPanel.classList.add("hide");
    refundChevronDown.classList.remove("hide");
    refundChevronUp.classList.add("hide");
  }
});


const supportButton = document.querySelector("#disclosure-support-button");
const supportChevronUp = document.querySelector("#disclosure-support-chevron-up");
const supportChevronDown = document.querySelector("#disclosure-support-chevron-down");
const supportPanel = document.querySelector("#disclosure-support-panel");

supportButton.addEventListener("pointerdown", (event) => {
  if (supportPanel.classList.contains("hide")) {
    supportPanel.classList.remove("hide");
    supportChevronDown.classList.add("hide");
    supportChevronUp.classList.remove("hide");
  } else {
    supportPanel.classList.add("hide");
    supportChevronDown.classList.remove("hide");
    supportChevronUp.classList.add("hide");
  }
});

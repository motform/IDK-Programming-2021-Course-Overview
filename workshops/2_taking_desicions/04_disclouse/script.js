/* 
 * 4. Disclosure
 * 
 * TASK: fill in the blanks to make the widget work.
 * We are looking for a behaviour where a click on the disclosure header
 * reveals the text in the disclosure panel. Follow the comments!
 * 
 */

// All of the relevant HTML elements are already selected for you
const refundHeader = document.querySelector("#disclosure-refund-header");
const refundChevronUp = document.querySelector("#disclosure-refund-chevron-up");
const refundChevronDown = document.querySelector("#disclosure-refund-chevron-down");
const refundPanel = document.querySelector("#disclosure-refund-panel");

// If the user clicks the header:
refundHeader.addEventListener("pointerdown", (event) => {
  // Check if `refundPanel` contains the class "hide"
  /*
    if (refundPanel.classList.contains(___)) {
    // If that is the case, we want to show the element by removing the hide class
//    refundPanel.classList.remove(___);
    // We want to hide the chevron that points down (v)
//    refundChevronDown.classList.add(___);
    // And show the one that points up (^)
//    refundChevronUp.classList.remove(___);

    // If `refundPanel` does not have the "hide" class, we want to close it
   } else {
    // Hide the panel by adding the "hide" class
//    refundPanel.___
    // Show the downward pointing chevron (v)
//    refundChevronDown.___
    // Hide the upward pointing one
//    refundChevronUp.___
    }
  */
});

/* Now do the same thing but with the support disclosure! This isi
   more or less the exact same code. Next week, we will see how we could
   simplify cases like this through the use of functions. */

const supportHeader = document.querySelector("#disclosure-support-header");
const supportChevronUp = document.querySelector("#disclosure-support-chevron-up");
const supportChevronDown = document.querySelector("#disclosure-support-chevron-down");
const supportPanel = document.querySelector("#disclosure-support-panel");

/* You will have to write all of this on your own, but remember,
   it is _very_ similiar to the first one. */
supportHeader.addEventListener("pointerdown", (event) => {

  // You can do it! :)

});

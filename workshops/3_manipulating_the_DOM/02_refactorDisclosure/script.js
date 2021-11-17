/* 
 * 4. Disclosure
 * 
 * TASK: You are going to refactor (rewrite/change/improve) the
 * disclosure code from last week by extracting the event callback for
 * the disclosure buttons into a function. You will most likely need
 * to have a few parameters for each element that changes.
 * 
 * ---------------------------------------------------------------------- 
 * 
 * EXTRA: It is possible to write a version of the callback with a
 * single paramter - the main disclosure container. This is rather
 * advanced, but you can look at the spoilers if you want an idea.
 *
 * HINT: You can use `.querySelector` on an element to "scope" the selection
 *       to only its children.
 * 
 */

// All of the relevant HTML elements are already selected for you
const refundHeader = document.querySelector("#disclosure-refund-header");
const refundChevronUp = document.querySelector("#disclosure-refund-chevron-up");
const refundChevronDown = document.querySelector("#disclosure-refund-chevron-down");
const refundPanel = document.querySelector("#disclosure-refund-panel");

refundHeader.addEventListener("pointerdown", (event) => {
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

const supportHeader = document.querySelector("#disclosure-support-header");
const supportChevronUp = document.querySelector("#disclosure-support-chevron-up");
const supportChevronDown = document.querySelector("#disclosure-support-chevron-down");
const supportPanel = document.querySelector("#disclosure-support-panel");

supportHeader.addEventListener("pointerdown", (event) => {
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


/* EXTRA:
 *
 * All we really need is the container-element and to know the classes of all the things we want to use. Once we have that, we can get to them using the "scoped" `.querySelector` by using it not on our entire `document`, but just on the `disclosureContainer`.
 *
 */

const addDisclosureCallback = (disclosureContainer) => {
  const header      = disclosureContainer.querySelector(".disclosure-header");
  const chevronUp   = disclosureContainer.querySelector(".chevron-up");
  const chevronDown = disclosureContainer.querySelector(".chevron-down");
  const panel       = disclosureContainer.querySelector(".disclosure-panel");

  header.addEventListener("pointerdown", (event) => {
    if (panel.classList.contains("hide")) {
      panel.classList.remove("hide");
      chevronDown.classList.add("hide");
      chevronUp.classList.remove("hide");
    } else {
      panel.classList.add("hide");
      chevronDown.classList.remove("hide");
      chevronUp.classList.add("hide");
    }
  });
}

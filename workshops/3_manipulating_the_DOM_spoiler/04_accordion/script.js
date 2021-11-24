/* 
 * 4. D.I.Y. Accordion
 * 
 * The accordion is version of the disclosure element where only one
 * panel is open at a time. This small change is surprisingly
 * impactful, as it requires us to somehow keep track of the state of
 * all of the panels.
 * 
 * For an interactive reference, see:
 * https://www.radix-ui.com/docs/primitives/components/accordion
 *
 * TASK: 
 * For your first attempt, create the elements using HTML, style
 * them with your own CSS (there is an extra `styles.css` in this
 * folder) and wire it all together with the script.
 * 
 * EXTRA: 
 * - Do the assignment again, but this time create the elements using
 *   the DOM interface, i.e. with `createElement` and `append`.
 *   + This is a lot more challenging, as it requires to deal with a
 *     higher degree of indirection.
 */

/* The quick, hack-y solution with the HTML pre-defined */
const accordions = document.querySelector("#accordions");
accordions.classList.add("v-stack", "gap-half");

const accordion1 = document.querySelector("#accordion-1");
const accordion2 = document.querySelector("#accordion-2");
const accordion3 = document.querySelector("#accordion-3");

const pointChevron = (direction, chevron) => {
  const up   = chevron.querySelector(".chevron-up");
  const down = chevron.querySelector(".chevron-down");

  if (direction === "up") {
    up.classList.remove("hide");
    down.classList.add("hide");
  } else {
    up.classList.add("hide");
    down.classList.remove("hide");
  }
}

const hideOtherAccordions = (accordion) => {
  accordion1.querySelector(".accordion-panel").classList.add("hide");
  accordion2.querySelector(".accordion-panel").classList.add("hide");
  accordion3.querySelector(".accordion-panel").classList.add("hide");
  pointChevron("down", accordion1.querySelector(".chevron-container"));
  pointChevron("down", accordion2.querySelector(".chevron-container"));
  pointChevron("down", accordion3.querySelector(".chevron-container"));

  const panel = accordion.querySelector(".accordion-panel").classList.remove("hide");
  pointChevron("up", accordion.querySelector(".chevron-container"))
}

const attachAccordionEvent = (accordion) => {
  const header  = accordion.querySelector(".accordion-header");
  const chevron = accordion.querySelector(".chevron-container");
  const panel  = accordion.querySelector(".accordion-panel");

  header.addEventListener("pointerdown", (event) => {
    hideOtherAccordions(accordion);
  });
}

attachAccordionEvent(accordion1, "1");
attachAccordionEvent(accordion2, "2");
attachAccordionEvent(accordion3, "3");


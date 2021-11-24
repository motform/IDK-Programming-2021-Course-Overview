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

/* The longer, more rigorous solution using DOM functions. */

const makeChevron = () => {
  const chevronContainer = document.createElement("div");
  chevronContainer.classList.add("chevron-container")

  const chevronUp = document.createElement("img");
  chevronUp.src = "chevron-up.svg";
  chevronUp.classList.add("chevron-up", "hide");

  const chevronDown = document.createElement("img");
  chevronDown.src = "chevron-down.svg";
  chevronDown.classList.add("chevron-down");

  chevronContainer.append(chevronUp, chevronDown);

  return chevronContainer;
}

/* This functions does employ arrays and loops, which we will learn
   about next week, so I'm sorry for skipping ahead! But man, all the
   other solutions I had for this where... eeek */
const updateAccordions = (event) => {
  const activeAccordion = event.target.parentElement;

  // .querySelectorAll gets all of the elements matching the selector and puts them in an array
  const accordionContainer = document.querySelector("#accordions");
  const accordions = accordionContainer.querySelectorAll(".accordion");

  // We then iterate over all of them, making sure that we ignore the active accordion that we want to open
  for (const accordion of accordions) {
    const panel = accordion.querySelector(".accordion-panel");
    const chevronUp   = accordion.querySelector(".chevron-up");
    const chevronDown = accordion.querySelector(".chevron-down");

    if (accordion === activeAccordion) {
      panel.classList.toggle("hide");
      chevronUp.classList.toggle("hide");
      chevronDown.classList.toggle("hide");
    } else {
      panel.classList.add("hide");
      chevronUp.classList.add("hide");
      chevronDown.classList.remove("hide");
    }
  }
}

const makeAccordionSection = (labelText, panelText) => {
  const accordion = document.createElement("article");
  accordion.classList.add("accordion", "rounded");

  // The header, which is the clickable element
  const header = document.createElement("section");
  header.classList.add("accordion-header", "h-stack", "rounded");
  header.addEventListener("pointerdown", updateAccordions);

  const label = document.createElement("h3");
  label.innerHTML = labelText;
  header.append(labelText, makeChevron());

  // The panel
  const panel = document.createElement("section");
  panel.classList.add("accordion-panel", "hide");

  const panelParagraph = document.createElement("p");
  panelParagraph.innerHTML = panelText;

  panel.append(panelParagraph);  // Appending a string creates a paragraph element

  // Putting it all together
  accordion.append(header, panel);
  return accordion;
}

accordions.append(
  makeAccordionSection("Who plays the accordion?", "The accordion is played mainly by musicians, but is also known to frequent other circles of society. In 2020, over half of all newly produced accordions where sold to hobby taxidermists."),
  makeAccordionSection("Who plays the accordion?", "The accordion is played mainly by musicians, but is also known to frequent other circles of society. In 2020, over half of all newly produced accordions where sold to hobby taxidermists."),
  makeAccordionSection("Who plays the accordion?", "The accordion is played mainly by musicians, but is also known to frequent other circles of society. In 2020, over half of all newly produced accordions where sold to hobby taxidermists.")
);

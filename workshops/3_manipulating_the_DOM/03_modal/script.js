/* 
 * 3. Modal, or alert popup
 * 
 * TASK: Fill in the blanks to make the widget work.
 * We are making a model, also known as an "alert" or "popup" that
 * takes over the screen, prompting the user if they _really_ want to
 * delete the widget once they have pushed the button.
 *
 * This script is a bit longer than the ones we have seen, but a
 * majority of it is simply creating new elements, adding the
 * corresponding classes/eventsListeners and then assembling them.
 * 
 * This approach is different to the one we took when we made the
 * hamburger menu. For the modal, it makes more sense to dynamically
 * add, and consequently remove, elements as they are needed. Unlike a
 * hamburger, which we could argue is always "there", modals are
 * created in a more a la carte fashion.
 *
 */


// The button that selects our modal, not all to interesting
const modalButton = document.querySelector("#modal-button-open");

// Another bootstrap icon, this one is: https://icons.getbootstrap.com/icons/archive/
// As you can see, we can createElement to make the element, add a class and set the src
const iconTrash = document.createElement("img");
iconTrash.classList.add("modal-icon");
iconTrash.src = "trash.svg";


/*
  Functions that create, open and close the modal.
*/


// This function creates a "modalButton", the ones we use for "cancel" & "confirm"
const makeModalButton = (label, className, pointerdownEventCallback) => {

  /* First, create a new button element */
  // const modalButton = document.___;

  /* Add the classes "widget-input-button-large", "rounded", "shadow-medium" */
  // modalButton.classList.___;

  /* Add the class that we get as an input to the function, `className` */
  // modalButton.classList.___;

  /* Set the function input `pointerdownEventCallback` as our callback function */
  // modalButton.addEventListener("pointerdown", ___);

  /* Set the innerHTML of the button to be function input `label` */
  //  modalButton.___;

  /* Return the button as the function output */
  // return ___;
};


/* This function makes the "dimmer", the empty element that we overlay to disable the rest of the page */
const makeDimmer = () => {
  /* Create a new "div" element */
  // const dimmer = document.___;

  /* Give it the class "modal-dimmer" */
  // dimmer.___;

  /* Return the dimmer as the function output */
  // return ___;
}


/* This function takes a bunch of argumens as input 🤰 and returns a full formed modal 👶 */
const makeModal = (text, subText, icon, dimmer, targetElement) => {
  /*  create an new "section" */
  //  const modal = document.___;

  /* set the id of the modal to "activeModal" */
  // modal.id = ___;

  /* add the classes "modal", "v-stack", "gap-full", "shadow-large", "rounded", "blurred" */
  // modal.classList.___;


  /* The icon */

  /* make a new div */
  // const modalIconContainer = ___;

  /* append the input argument `icon` */
  // modalIconContainer.append(___);

  /* give it the class "modal-icon"*/
  // modalIconContainer.classList.add("modal-icon");


  /* The modal text */

  /* create a new paragraph */
  // const modalText = ___;

  /* set it's contents to the input argument `text` */
  // modalText.innerHTML = ___;

  /* create a pragraph for the subtext */
  // const modalSubText = ___;

  /* set it's contents to the input argument `subText` */
  // modalSubText.___;

  /* add the class "modal-sub-text" */
  // modalSubText.___;

  /* create a new section for the text */
  // const modalTextContainer = ___;

  /* add the classes "modal-text", "v-stack", "gap-quarter" */
  // modalTextContainer.___;

  /* append `modalText` and `modalSubText` */
  // modalTextContainer.___;



  /* The button-container and the buttons themselves. */

  /* Create a section for the buttons */
  // const modalButtons = ___;

  /* Give it the classes "h-stack", "gap-half" */
  // modalButtons.___;

  /* You get the call to make the buttons for free! However, I want to
     you comment what each part of this code does. How do the arguments
     corresond to each other? This is perhaps the part with the most new stuff,
     so it is very important that you try your best to figure it out!
     Scroll up and down, reference the function declarations to this
     site of "function invocation". Good luck! */
  const buttonCancel = makeModalButton("Cancel", "button-regular", (event) => {
    closeModal(modal, dimmer);
  });

  const buttonDelete = makeModalButton("Delete", "button-destructive", (event) => {
    closeModal(modal, dimmer);
    targetElement.remove();
  });

  /* Append the two buttons that we just made to the section from before. */
  // modalButtons.___;

  /* Append the modalIconContainer, modalTextContainer, modalButtons to the parent modal element */
  // modal.___;

  /* Finally, return `modal`! */
  // return ___;
};


/* This is the callback function that we set to the button. We could
   define this "inline" as an anonymous function, but we'll make it named
   as practice. */

const openModal = (event) => {
  // We append the modal directly to the <body> tag, as it makes
  // little sense to nest it as a child of the widget itself.


  /* Call the `makeDimmer` function and capture it's return value in the varirable */
  // const dimmer = ___();

  /* Append the newly created dimmer to the body */
  // document.body.append(___);

  /* This is the widget that we will delete if the user so desires. */
  const targetElementToClose = document.querySelector("#unsuspecting-widget");

  /* Again, I won't make you write the function call, but you should
     try to understand it. How does the call map to the input of the function? */
  const modal = makeModal('Are you sure you want to delete the widget "Modal"?',
                          "You can't undo this action.",
                          iconTrash,
                          dimmer,
                          targetElementToClose)

  /* Finally, append the modal to the body as well! */
  // document.body.append(___);
}

/* This is just a simple function to close/remove the modal. Annotate it with comments. */
const closeModal = (modal, dimmer) => {
  modal.remove();
  dimmer.remove();
}

/* Hooking up the functions to the button. */
modalButton.addEventListener("pointerdown", openModal);

/* Thats is, puh! A lot, but as you can see, most of it is just
   creating elements, adding classes and them appending them
   together. This produces a lot of code in qualitity, but we start to
   get the hang of it after a while. But well done for reaching this
   far, you deserve a break! */

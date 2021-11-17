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

const modalButton = document.querySelector("#modal-button-open");

// Another bootstrap icon, this one is: https://icons.getbootstrap.com/icons/archive/
// As you can see, we can actually createElement
const iconTrash = document.createElement("img");
iconTrash.classList.add("modal-icon");
iconTrash.src = "trash.svg";

/* Functions that create, open and close the modal. */

const makeModalButton = (label, className, pointerdownEventCallback) => {
  const modalButton = document.createElement("button");
  modalButton.classList.add(className, "widget-input-button-large", "rounded", "shadow-medium");
  modalButton.addEventListener("pointerdown", pointerdownEventCallback);
  modalButton.innerHTML = label;

  return modalButton;
};

const makeDimmer = () => {
  const dimmer = document.createElement("div");
  dimmer.classList.add("modal-dimmer");

  return dimmer;
}

const makeModal = (text, subText, icon, dimmer, targetElement) => {
  const modal = document.createElement("section");
  modal.id = "activeModal";
  modal.classList.add("modal", "v-stack", "gap-full", "shadow-large", "rounded", "blurred");

  const modalIconContainer = document.createElement("div");
  modalIconContainer.append(icon);
  modalIconContainer.classList.add("modal-icon");

  /* The modal text */

  const modalText = document.createElement("p");
  modalText.innerHTML = text;

  const modalSubText = document.createElement("p");
  modalSubText.innerHTML = subText;
  modalSubText.classList.add("modal-sub-text");

  const modalTextContainer = document.createElement("section");
  modalTextContainer.classList.add("modal-text", "v-stack", "gap-quarter");
  modalTextContainer.append(modalText, modalSubText);


  /* The button-container and the buttons themselves. */
  const modalButtons = document.createElement("section");
  modalButtons.classList.add("h-stack", "gap-half");

  const buttonCancel = makeModalButton("Cancel", "button-regular", (event) => {
    closeModal(modal, dimmer);
  });

  const buttonDelete = makeModalButton("Delete", "button-destructive", (event) => {
    closeModal(modal, dimmer);
    targetElement.remove();
  });

  modalButtons.append(buttonCancel, buttonDelete);

  // Append everything to the modal container
  modal.append(modalIconContainer, modalTextContainer, modalButtons);

  return modal;
};

const openModal = (event) => {
  // We append the modal directly to the <body> tag, as it makes
  // little sense to nest it as a child of the widget itself.
  const dimmer = makeDimmer();
  document.body.append(dimmer);
  const targetElementToClose = document.querySelector("#unsuspecting-widget");

  const modal = makeModal('Are you sure you want to delete the widget "Modal"?',
                          "You can't undo this action.",
                          iconTrash,
                          dimmer,
                          targetElementToClose)
  document.body.append(modal);
}

const closeModal = (modal, dimmer) => {
  modal.remove();
  dimmer.remove();
}

/* Hooking up the functions to the button. */
modalButton.addEventListener("pointerdown", openModal);

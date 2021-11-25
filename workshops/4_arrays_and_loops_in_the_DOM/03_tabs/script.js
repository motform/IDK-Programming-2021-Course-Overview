/* 
 * 3. Tabs
 * 
 * TASK: Tab interfaces are commmon when we want selective disclosure of larger 
 * sections of information, often  some kind of logical sub-divison of the program.
 * Your task is to make a simple tabbed interface that consits of two parts:
 * 
 * 1. A "tab bar" of triggers. 
 * 2. A panel with the content of the open tab.
 * 
 * Clicking on a tigger in the tab bar should correspondingly show the 
 * correct content in the panel. Unlike the disclorsure and accordion widget
 * we have made before, the tab introduces a layer of indirection. It is not
 * really possible to keep the trigger and the panel in the same element. 
 * The trigger bar is displayed at all times, where as the panel is shifting.
 * In order to make this work, you will need to introduce some kind of indirect
 * linking between the tab and the panel. There are muntiple ways of doing this,
 * but I will show you how we can get and set custom HTML attributes.
 * 
 * This exercise is presented as a "fill in the blanks", but you could also 
 * try to do it from scratch if you feel adventurous.
 * 
 * ---------------------------------------------------------------------- 
 * 
 * EXTRA: Add a button that allows the user to create a new tab, similiar
 * to how a web browser works. This most likely requires you to add some
 * kind of input popup/modal, so check that example out for reference.
 * Of course, this is very, very, extra and quite a difficult challenge, so
 * I would skip it unless you are the type of person who finds pleasure
 * in this type of thing.
  * 
 */


const ___ =  null; // a small hack to avoid syntax errors from uncommented `___`

const tabTriggers = document.querySelector("#tab-triggers");
const tabPanels = document.querySelector("#tab-panels");

// First, we make a function called `toggleTab`, this will be used
// as a callback function that fires when the user clicks on one of
// the triggers in the tab bar
const toggleTab = (event) => {
  /* select all elements with the class ".tab-trigger" */
  // const triggers = document.querySelectorAll("___"); 

  /* get the tab we have clicked by looking at the `target` of the event */
  // const clickedTabTrigger = ___;

  // Highlight the trigger ther user clicked

  /* loop over `triggers` with the loop varible `trigger` */
  for (const ___ of ___) {
    /* check if the trigger is the one the user clicked */
    if (___ === ___) {
      /* if that is the case, add the class`trigger-focused` */
      trigger.classList.add(___);
    } else {
      /* if not, we don't want it to have the `trigger-focused` class */
      trigger.classList.remove(___);
    }
  }

  // Now we need to show the corresponding panel! 

  /* first, get the panels by selecting all elements with the class ".tab-panel" */
  const panels = document.querySelectorAll(___);

  /* second, we need to get the "tab-panel-id" from the trigger, if you are confused by this, scroll down first. */
  const tabPanelId = clickedTabTrigger.getAttribute("tab-panel-id");


  /* Loop over `panels` with the loop variable `panel`  */
  for (const ___ of ___) {

    /* If the panel has the id that matches the tabPanelId that was in our triggers attribute, remove the css class "hide" */
    if (panel.id === tabPanelId) {
      panel.classList.remove(___);
    } else {
      /* otherwise, we obviously want to hide it */
      panel.classList.add(___);
    }
  }
} // end of toggleTab


// A small helper function that makes and returns a "panel" element 

/* the function should take one input argument called `text` */
const makePanel = (___) => {
  /* create a "section" element */
  const panel = document.createElement(___);

  /* add the classes "tab-panel" & "hide"*/
  panel.classList.add(___, ____);

  /* append the text that we get as a function input */
  panel.append(___);

  /* return the panel*/
  return ___;
}



// A helper function that makes a tab, adds the event listeners and mounts it in the DOM

/* Nothing to fill in here, but note how we are getting quite a lot of input,
   we need an id to match trigger <-> panel, a label for the trigger, the panel (an html element)
   and a boolean of wether or this tab is the default focus. */
const makeTab = (tabId, label, panel, isDefaultFocus) => {

  /* Make a new li */
  const trigger = document.createElement(___);
  /* Add the class "tab-trigger" */
  trigger.classList.add(___);

  /* Append the function input `label` */
  trigger.append(___);

  /* Register the function `toggleTab` (see above) as an envent listener for "pointerdown" */
  trigger.addEventListener("pointerdown", ___);

  /* Here, we add the attribute "tab-panel-id" and set it to the value of our funciton input `tabId`.
     Before: <li>Label</li>
     After: <li tab-panel-id="tabId">Label</li>
     We are allowed to add any arbitrary attribute to an element. */
  trigger.setAttribute("tab-panel-id", tabId);

  /* Make sure we also set the id of the panel to match the attribute we added to the trigger */
  panel.id = tabId;

  /* Check if we are the default focus */
  if (___) {
    /* If so, we add some classes and remove the "hide" class */
    trigger.classList.add("trigger-focused");
    panel.classList.remove("hide");
  }

  /* Finally, append the trigger to the list of tab triggers */
  tabTriggers.append(___);

  /* And the panel to the section with the panels */
  tabPanels.append(___);
}

makeTab(
  1,           // The tab id
  "Account",   // The label of the tab/trigger
  makePanel("To make changes to your account, please confirm the EULA."), // The panel with it's content
  true         // Wether or not it is the tab selected by default
);

makeTab(
  2,         // The tab id
  "About",   // The label of the tab/trigger
  makePanel("TABS Inc. are the premier tab producers of the Northen Midwest."),
  false      // Wether or not it is the tab selected by default
);

// Well done! This was a complicated one, so it is OK if we only get parts of it.

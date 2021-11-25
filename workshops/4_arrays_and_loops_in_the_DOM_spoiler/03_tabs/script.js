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

const tabTriggers = document.querySelector("#tab-triggers");
const tabPanels = document.querySelector("#tab-panels");

const toggleTab = (event) => {
    const triggers = document.querySelectorAll(".tab-trigger");
    const clickedTabTrigger = event.target;

    // Highlight the trigger ther user clicked
    for (const trigger of triggers) {
        if (trigger === clickedTabTrigger) {
            trigger.classList.add("trigger-focused");
        } else {
            trigger.classList.remove("trigger-focused");
        }
    }

    // Show the corresponding panel
    const panels = document.querySelectorAll(".tab-panel");
    const tabPanelId = clickedTabTrigger.getAttribute("tab-panel-id");

    for (const panel of panels) {
        console.log(panel.id, tabPanelId)
        if (panel.id === tabPanelId) {
            panel.classList.remove("hide");
        } else {
            panel.classList.add("hide");
        }
    }
}

const makePanel = (text) => {
    const panel = document.createElement("section");
    panel.classList.add("tab-panel", "hide");
    panel.append(text);
    return panel;
}

const makeTab = (tabId, label, panel, isDefaultFocus) => {
    const trigger = document.createElement("li");
    trigger.classList.add("tab-trigger");
    trigger.append(label);
    trigger.addEventListener("pointerdown", toggleTab);
    trigger.setAttribute("tab-panel-id", tabId);

    panel.id = tabId;

    if (isDefaultFocus) {
        trigger.classList.add("trigger-focused");
        panel.classList.remove("hide");
    }

    tabTriggers.append(trigger);
    tabPanels.append(panel);
}

makeTab(
    1,
    "Account",
    makePanel("To make changes to your account, please confirm the EULA."),
    true
);

makeTab(
    2,
    "About",
    makePanel("TABS Inc. are the premier tab producers of the Northen Midwest."),
    false
);


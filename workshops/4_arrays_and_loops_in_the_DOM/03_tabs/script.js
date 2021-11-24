/* 
 * 3. Tabs
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

const tabTriggers = document.querySelector("tabTriggers");
const tabPanels   = document.querySelector("tabPanels");

const toggleTag = (event) => {
  const triggers = document.querySelectorAll(".tab-trigger");
  const clickedTabTrigger = event.target.parentElement;

  // Highlight the trigger ther user clicked
  for (const trigger of triggers) {
    if (tab === clickedTab) {
      header.classList.add("tab-focused");
    } else {
      header.classList.remove("tab-focused");
    }
  }

  // Show the corresponding panel
  const panels = document.querySelectorAll(".tab-panel");
  const tabPanelId clickedTabTrigger.getAttribute("tab-panel-id");

  for (const panel of panels) {
    if (panel.id === tabPanelId) {
      panel.classList.remove("hide");
    } else {
      panel.classList.add("hide");
    }
  }
}

const makeTab = (label, panel, tabPanelId) => {
  const trigger = document.createElement("li");
  trigger.classList.add("tab-trigger");
  trigger.append(label);
  trigger.addEventListener("pointerdown", toggleTab);
  trigger.setAttribute("tab-panel-id", tabPanelId);

  panel.id = tabPanelId;

  return [trigger, panel];
}

const addTab = (label, panel, id) => {
  const tab = makeTab(label, panel, id);
  tabTriggers.append(tab[0]);
  tabPanels.append(tab[1]);
}

const panel1 = document.createElement("div");
panelExample.append("foo");

const panel2 = document.createElement("div");
panelExample.append("bar");

addTab("foo", panel1, "1");
addTab("bar", panel1, "2");

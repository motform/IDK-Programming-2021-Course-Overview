/* 
 * 2. Refactoring Disclosure 2
 * 
 * Understanding loops and arrays allows us to use `querySelectorAll`,
 * a fantastic tool all affors us the ability to make our code generic.
 * Up until this point, we have had to either make HTML elements using
 * the `document.*` functions, or by selecting then via ID. Both of these
 * approaches become very inconvenient the moment we want to talk about 
 * more than one element at a time. `querySelectorAll` gives us back an 
 * arry of the corresponding elements, which we can loop over, giving us 
 * the possiblity to add event listeners, modify the classList and so forth.
 * Using loops avoids code repetition (a.k.a. copypasta), which reduces the
 * surface for possible bugs.
 * 
 * Our first version the discourse was at least 60 lines of JS.
 * Using arrays, loops and querySelectorAll, we can get it down to 20!
 * 
 * TASK: Fill in the blanks, follow the comments and compare to your
 * previous refactors!
 * 
 */

const ___ = null; // a hack to get rid of the pesky "___ is undefined" warnings, you can just ignore it

// Use querySelectorAll to get all elements of the class ".disclosure"
const disclosures = ___;

// Loop over `disclosures`, naming the loop variable `disclosure` (notice singular vs. plural form)
for (const ___ of ___) {
  // We have seen this part so many times by now that we don't really want to do it again
  const header = disclosure.querySelector(".disclosure-header");
  const chevronUp = disclosure.querySelector(".chevron-up");
  const chevronDown = disclosure.querySelector(".chevron-down");
  const panel = disclosure.querySelector(".disclosure-panel");

  // add an event listener to header for "pointerdown"
  ___.addEventListener(___, (event) => {

    // check if the classList of the panel contains the hide class
    if (panel.classList.contains(___)) {

      // if so, remove the "hide" class from the panel
      panel.classList.remove(___);

      // toggle the chevrons by adding the "hide" class to chevronDown
      chevronDown.___;

      // removing the "hide" class from the chevronUp to show it 
      chevronUp.___;

      
    } else { // If we don't contain the class, i.e. we are showing, we want to hide the panel

      // in this case, we want to add the "hide" class to the panel
      panel.___;

      // make sure that the chevron points down by removing the "hide" class on chevronDown
      chevronDown.___;

      // in doing this, we of course have to add "hide" to chevronUp
      chevronUp.___;
    }
  });
}

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

const disclosures = document.querySelectorAll(".disclosure");

for (const disclosure of disclosures) {
    const header = disclosure.querySelector(".disclosure-header");
    const chevronUp = disclosure.querySelector(".chevron-up");
    const chevronDown = disclosure.querySelector(".chevron-down");
    const panel = disclosure.querySelector(".disclosure-panel");

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
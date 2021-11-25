/*
 * 1. Color Generator
 *
 * TASK: Annotate each line with a comment, try to understand how everything
 * connects. You can skip over the function `tintRGBColor`, all it does is 
 * generate the next tint of a color using some maths that are not very
 * important to the task at hand.
 * 
 */


/* Start of cryptic helper functions */

// Equation source: https://maketintsandshades.com/about
// The numbers are allowed to overshoot as most browsers handle >255 as 255.
const tintRGBColor = (RGBColor, amount) => {
    return [
        Math.floor(Number.parseInt(RGBColor[0]) + ((255 - 102) * amount)),
        Math.floor(Number.parseInt(RGBColor[1]) + ((255 - 51) * amount)),
        Math.floor(Number.parseInt(RGBColor[2]) + ((255 - 153) * amount))
    ];
};

// This function uses a "template literal", which is a type of string
// where you can "slot in" values. I know it shows up in codeCademy, and I 
// thought it could be interesting to see a real world use case. Here, we
// are generating a string that we can pass as a CSS value. 
// Calling the function with [10, 40, 60] returns "rgb(10, 40, 60)"
const RGBString = (RGBColor) => {
    return `rgb(${RGBColor[0]}, ${RGBColor[1]}, ${RGBColor[2]})`;
};

/* End of cryptic helper functions */

const colorInputs = document.querySelectorAll(".color-generator-input");
const colorSwatches = document.querySelectorAll(".color-generator-swatch");
let RGBColor = ["50", "50", "110"];

// Listen for input-events on all of the color.
for (let i = 0; i < colorInputs.length; i++) {
    colorInputs[i].addEventListener("input", (event) => {
        RGBColor[i] = event.target.value; // handle >255 user inputs

        let amount = 0.1;
        for (const colorSwatch of colorSwatches) {
            const nextTint = tintRGBColor(RGBColor, amount);
            colorSwatch.style.backgroundColor = RGBString(nextTint);
            amount += 0.2;
        }
    });
}

// Run the tinting once to get the starting colors
{
    let amount = 0.1;
    for (const colorSwatch of colorSwatches) {
        const nextTint = tintRGBColor(RGBColor, amount);
        colorSwatch.style.backgroundColor = RGBString(nextTint);
        amount += 0.2;
    }
}

"use strict";
console.log("script loaded!");
let asim = 1;

function GenerateParagraph() {
    const paragraph = document.createElement("p");
    const paraText = document.createTextNode("In a hole in the ground lived a hobbit.");
    paragraph.appendChild(paraText);
    document.body.appendChild(paragraph);
}

GenerateParagraph();
// Author Nick R//
//Created 3-2-2021//
//License: Public Domain//

//Task2:Put a comment block at the top of your program
//Create a new element with document.createElement("p") and assign it to a variable new1El
//Change the html attribute of new1El to say something new.
//Create another new element and assign it to a variable new2El
//Change the html attribute of new2El to say something else.
//Append both new elements one at a time using appendChild()
//Change the css attributes of at least two elements of your page//




var outputEl = document.getElementById("output");
console.log("outputEl:" , outputEl);


var new1El = document.createElement("p");
new1El.innerHTML = "My name is Nick";


var new2El = document.createElement("p")
new2El.innerHTML = "I am new to using javascript";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El)

new1El.style.color = "green";
new2El.style.color = "green";
new1El.style.fontFamily = "proxima nova ultrabold, sans-serif"
new2El.style.fontFamily = "proxima nova ultrabold, sans-serif"
new1El.style.fontSize = "20pt";
new2El.style.fontSize = "20pt";
outputEl.style.border = "solid 10px green";
outputEl.style.backgroundColor = "white";
outputEl.style.maxWidth = "30%";
outputEl.style.padding = "20px";
outputEl.style.marginTop = "20px";


var img1 = document.getElementById("img")
console.log("img1:", img1);

img1.style.border = "solid 10px green";

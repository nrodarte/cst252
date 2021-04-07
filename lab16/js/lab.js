// Author Nick R/IshB//
//Created 4-6-2021//
//License: Public Domain//


// Append my button, create the button, and give the button an id so I can style it
$("#outputs").append("<button id='my-button'>Click Me</button>")

 // Click event listener with attached alert
 $("#my-button").click(function(){
   alert("Made you click! :P");
 })

 // css for the button, turn it green and change font, padding, border and more
 $("#my-button").css({

   "background-color": "#93E9BE",
  "font-family": "proxima nova ultrabold, sans-serif",
  "color": "white",
   "font-size": "40px",
   "padding": "10px",
   "border": "#93E9BE"
 })

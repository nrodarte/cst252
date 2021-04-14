
// Author Nick R/IshB//
//Created 4-13-2021//
//License: Public Domain//




var myButton = $("<button>");


myButton.html("Click Here");

$("#outputs").append(myButton);

myButton.click(function(){
  myButton.css("background-color", "green");
  myButton.addClass("green-button");
  alert("Do not Click");

})

$("#challenge-button").click(function(){
	$("#challenge-button").css("background-color", "red");


});

$("#problems-button").click(function(){
	$("#problems-button").css("background-color", "blue");


});

$("#results-button").click(function(){
	$("#results-button").css("background-color", "yellow");


});

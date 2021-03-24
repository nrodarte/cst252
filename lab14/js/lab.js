// Author Nick R/IshB//
//Created 3-23-2021//
//License: Public Domain//

function Vehicle(make, model, year, color, extras, name){
  this.make = make;
  this.year = year;
  this.color = color;
  this.model = model;
  this.extras = extras;
  this.name = name;
  this.info = function() {
    return this.color + " " + this.year + " " + this.make + " " + this.model + " with " + this.extras + " called " + this.name ;
  }
}

var vehicles = [];

vehicles.push(new Vehicle("Custom", "dirt jumper", 2016, "grey and red", "hand grenade valve caps " , "the craigslist whip"));
vehicles.push(new Vehicle("Ford", "Explorer", 2004, "gold", "a missing cigarette lighter and no heater " , "My first car, The Explorer"));
vehicles.push(new Vehicle("Buick", "Verano", 2016, "black", "hella trunk space " , "The Buick"));
vehicles.push(new Vehicle("Enjoi", "Make Jerry Rich pro model", 2011, "all green with a cash bag graphic ", "green venture trucks " , "my board"));

outputEl = document.getElementById("output");
for (var i = 0; i<vehicles.length; i++) {
  var newEl = document.createElement("li");
  newEl.innerText = vehicles[i].info();
  outputEl.appendChild(newEl);

}

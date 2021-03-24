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

vehicles.push(new Vehicle("Custom", "dirt jumper", 2019, "Grey and red", "hand grenade valve caps " , "the craigslist whip"));
vehicles.push(new Vehicle("Ford", "Explorer", 2004, "Gold", "a missing cigarette lighter and no heater " , "My first car, The Explorer"));
vehicles.push(new Vehicle("Buick", "Verano", 2016, "Black", "hella trunk space " , "The Buick"));
vehicles.push(new Vehicle("Enjoi", "Make Jerry Rich pro model", 2011, "All green with a cash bag graphic ", "green venture trucks " , "my board"));
vehicles.push(new Vehicle("Flip", "Black Logo", 2006, "Red", "too small of trucks " , "my first board"));
vehicles.push(new Vehicle("RIDE", "Manic", 2014, "Red, white and blue", "one ghetto binding buckle " , "my snowboard"));
vehicles.push(new Vehicle("Envy", "AOS scooter", 2008, "Black ", "no brake " , "the craiglist scooter"));
vehicles.push(new Vehicle("FELT", "Scotty Cranmer ", 2010, "Grey and red ", " odysessy doublespace handlebars and thunderbolt cranks, and a shadow stem " , "my first bmx"));

outputEl = document.getElementById("output");
for (var i = 0; i<vehicles.length; i++) {
  var newEl = document.createElement("li");
  newEl.innerText = vehicles[i].info();
  outputEl.appendChild(newEl);

}

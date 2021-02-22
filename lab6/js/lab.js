// Author Nick R//
//Created 2-21-2021//
//License: Public Domain//


//Defining Variables//
var myTransport = ["bike", "car" , "plane" , "train", "skateboard"];

var myMainRide = {
    make: "buick",
    model: "verano",
    color: "black",
    year: "2016",
    age: function() {
        return 2021 - age;
    }
}

//output//

document.write("My Transport: ", myTransport, "</br>");
document.write("my Main ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

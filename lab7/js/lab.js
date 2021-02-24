//Author Nick R //
// PUBLIC DOMAIN//
//2/23/21
// BELOW IS W3SCHOOLS PRACTICE//

//function asknameprompt() {
  //var person = prompt("What's your first name? ", "My Name is");
  //if (person !=null) {
    //document.getElementById("demo").innerHTML =
  //  "Hey there " + person + "! How was your weekend?";
//}
//}

// WES IT TOOK FOREVER BUT I GOT IT TO WORK IN ONE LINE//


function sortUserName(){
  var userName = window.prompt("Hey there, whats your name? Can I fix it?");
  console.log("userName =", userName);
  var nameSorted = userName.split("").sort().join("")
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}


//output

document.write("Oh look, its all better now:" + sortUserName());

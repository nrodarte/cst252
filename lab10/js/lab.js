// Author Nick R//
//Created 3-2-2021//
//License: Public Domain//

//variables for button, results, and take the input name and label it as output after the function shuffles it
  var buttonEl = document.getElementById("my-button");
  console.log(" button ", buttonEl);

  var inputEl = document.getElementById("user-name");
  console.log(" input", inputEl);

  var outputEl = document.getElementById("output");
  console.log(" output ", outputEl);



  //Adding eventlistener to my button when clicked
  buttonEl.addEventListener("click", function(){
    // get value from input and label it as a new variable userName
    var userName = inputEl.value;

    //shuffle function, new name is = to the results of the function
    var newName = reorderUserName(userName);

    //write in my output
    outputEl.innerHTML = "Shuffled Name = " + newName ;
  });



//Shuffle
  // shuffleArray - take an array and shuffle the contents
  // Thanks to https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  //below is taken from wmodes github lab 10 page
  function shuffleArray(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
          // select remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
      }
      return array;
  }

  // sortUserName - function that takes inputel and sorts the string
  function reorderUserName(inputEl) {
      var wordArray = inputEl.split('');
      var newArray = shuffleArray(wordArray);
      return newArray.join('');
  }

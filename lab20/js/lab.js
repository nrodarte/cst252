
// Author Nick R/IshB//
//Created 4-13-2021//
//License: Public Domain//

var URL = "https://xkcd.com/info.0.json";

var URLpre = "https://xkcd.com/";
var URLpost = "info.0.json";



function getComic(num) {
  if (typeof num === 'undefined') {
    numStr = "";
  } else {
    numStr = num.toString() + "/";
  }
  var ourURL = URLpre + numStr + URLpost;

  $.ajax({

      url: ourURL,
      // POST or GET
      type: "GET",
  })
  // If it works, run this
  .done(function(data) {

      var imageUrl = data.img;
      var title = data.title;
      var alt = data.alt;
      var comicNum = data.num;
      var html = `<div id="imageblock">
          <h2>${title}</h2>
          <img src="${imageUrl}" title="${alt}"><br>
          <button id="prev">Previous</button><button id="next">Next</button>
        </div>`
      console.log("My new html: ", html);
      $("#output").html(html);

      // add event listener to new prev button
      $("#prev").click(function(){
        getComic(comicNum - 1);
      });
      // add event listener to new next button
      $("#next").click(function(){
        getComic(comicNum + 1);
      });
  })
  //if it doesnt work, show this
  .fail(function(){
    console.log("^^ Please ignore this error. It's okay.");
    console.log("Have a happy day! :-)");
  })

}

//run the function
getComic();

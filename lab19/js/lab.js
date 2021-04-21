
// Author Nick R/IshB//
//Created 4-13-2021//
//License: Public Domain//



// setting variablke for url
URL = "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
//click event to buttons
$('#activate').click(function(){
  $.ajax({
    url: URL,
    //targeting the var url
    type: "GET",
    //get or post, in this case get

  })

  .done(function(data){
    console.log(data);
    $("#output").append("<p> Thankfully we do not have to listen to things like this anymore: <b>" + data.message);
  })
});
//$("#output").append("<p>The most stable smart man in the room says: <b>" + data.message);

/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

function randomQuote() {
  $.ajax( {
    url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",
    jsonp: 'jsonp',
    dataType: 'jsonp',
    data: {
      method: 'getQuote',
      lang: 'en',
      format: 'jsonp'
    },
    // jsonpCallback: function(data) {
    //   document.querySelector("#text").html(data);
    // },
    success: function(data) {
      console.log(data);
      $("#quoteText").text(data.quoteText);
      $("#quoteAuthors").text(data.quoteAuthor);
    }
  });
}

$(document).ready(function() {
  $("#new-quote").on("click", randomQuote);

  $("#tweet-quote").on('click', function(event) {
    event.preventDefault(); 
    window.open("https://twitter.com/intent/tweet?text=" + "\"" 
      + $("#quoteText").text() + "\""
      + $("#quoteAuthor").text()
      );
  });
});

randomQuote();

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
      $("#quoteText").html("<p>" + data.quoteText + "</p>");
      $("#quoteAuthors").html("<p>" + " -" + data.quoteAuthor + "</p>");
    }
  });
}

$(document).ready(function() {
  $("#new-quote").on("click", randomQuote);
});

randomQuote();

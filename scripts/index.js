/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

$(document).ready(function() {
    document.querySelector("#new-quote").addEventListener("click", function() {
      alert("hello, hien pham !");
        $.ajax( {
          url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",
          dataType: "json",
          success: function(data) {
            console.log(data);
          }
        });
    });
});

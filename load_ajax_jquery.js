$(document).ready(function () {
  $("#js-new-quote").click(function () {
    $.ajax({
      url: "https://api.whatdoestrumpthink.com/api/v1/quotes/random",
      type: "get",
      dataType: "json",
      beforeSend: function () {
        $("#js-spinner").toggleClass("hidden"); // show spinner
      },
      success: function (response) {
        displayQuote(response.message);
        $("#js-new-quote").disabled = true;
        $("#js-spinner").toggleClass("hidden"); // hide spinner
      },
    });
  });
});

function displayQuote(quote) {
  $("#js-quote-text").text(quote);
}

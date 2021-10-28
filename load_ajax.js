const spinner = document.querySelector("#js-spinner");
const newQuoteButton = document.querySelector("#js-new-quote");

newQuoteButton.addEventListener("click", getQuote); // handle click here..

const endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

function getQuote() {
  const xhttp = new XMLHttpRequest();

  xhttp.onload = function () {
    data = JSON.parse(this.responseText);
    displayQuote(data.message);

    newQuoteButton.disabled = false;
    spinner.classList.add("hidden"); // hide spinner
  };

  xhttp.onloadstart = function () {
    newQuoteButton.disabled = true;
    spinner.classList.remove("hidden"); // show spinner
  };

  xhttp.open("GET", endpoint);
  xhttp.send();
}

function displayQuote(quote) {
  const quoteText = document.querySelector("#js-quote-text");
  quoteText.textContent = quote;
}

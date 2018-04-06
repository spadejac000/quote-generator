// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//This is my array of Quotes. Each object in the array displays the quote, who said it, what type of genre the quote is, and possibly where you can find the qutoe.

var quotes = [
  {
    quote: "I've failed over and over and over again in my life and that is why I succeed.",
    source: "Michael Jordan",
    citation: "",
    genre: "Athlete"
  },
  {
    quote: "You're only given a little spark of madness. You mustn't lost it.",
    source: "Robin Williams",
    citation: "",
    genre: "Comedian"
  },
  {
    quote: "I'm going to use all my tools, my God-given ability, and make the best life I can with it.",
    source: "LeBron James",
    citation: "",
    genre: "Athlete"
  },
  {
    quote: "I really believe in the philosophy that you create your own universe. I'm just trying to create a good one for myself.",
    source: "Jim Carrey",
    citation: "",
    genre: "Comedian"
  },
  {
    quote: "Blessed are the merciful, for they will be shown mercy.",
    source: "Jesus Christ",
    citation: "The Bible",
    genre: "Religion"
  },
  {
    quote: "A new command I give you: Love one another. As I have loved you, so you must love one another.",
    source: "Jesus Christ",
    citation: "The Bible",
    genre: "Religion"
  },
  {
    quote: "If opportunity doesn't knock, build a door.",
    source: "Milton Berle",
    citation: "",
    genre: "Comedian"
  }
];

//This function here randomly chooses a quote from the array of quotes and returns it. It uses the random number function to randomize one of the quote key values and then returns it by using the return syntax.

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * 7)];
}


//This function takes the randomly selected quote from the getRandomQuote function and prints it to the page. It does that by first creating to variables: A string var and a generatedQuote var. Then using contactination the string is built up to display all keys in the randomly selected object the right way on the page. Finally the string is printed on the page by using the document.getElementById method and putting the string in the quote-box.


function printQuote() {
  var string = '';
  var generatedQuote = getRandomQuote();

  string += '<p class="quote">' + generatedQuote.quote +  '</p>';
  string += '<p class="source">' + generatedQuote.source;
  if (generatedQuote.citation) {
    string += '<span class="citation">' + generatedQuote.citation + '</span>';
  }
  string += '<span class="genre">' + " " + generatedQuote.genre + '</span>';
  string += '</p>';

  var string = document.getElementById('quote-box').innerHTML = string;
  return string;
}

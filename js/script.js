/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

var quotes = [ {
  quote: 'In Order to Do Something You’ve Never Done, You’ve Got to Become Someone You’ve Never Been.',
  source:  'Les Brown',
  tag: 'Motivational Speaker'
},

{
  quote:  'Learn as if you will live forever, live like you will die tomorrow.',
  source:   'Mahatma Gandhi'
},

{
 quote: 'Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.',
 source: 'Mark Twain' 
},

{
  quote:  'Without persistance, you will be defeated before you even start.',
  source: 'Napoleon Hill',
  year: 1937,
  citation: 'Think and Grow Rich'
},

{
 quote: 'When you change your thoughts, remember to also change your world.',
 source: 'Norman Vincent Peale'
},

{
  quote: 'Instead of thinking how hard your journey is, think how great your story will be.',
  source: 'Andy Frisella',
  tag: 'Owner of 1st Phorm Supplements'
},

{
  quote: 'The bottom line is that life is one big mind game. The only person you are playing against is yourself.',
  source: 'David Goggins'
}
];
//quotes array is holding quotes said by individuals to be stored for future use inside objects.

var colors = [
  {
      background: "#150485"
  },
  {
      background: "#590995"
  },
  {
      background: "#C62A88" 
  },
  {
      background: "#03C4A1"
  },
  {
      background: "#EF5B0C"
  },
  {
      background: "#CF38181"
  },
  {
      background: "#B8405E"
  },
  {
      background: "#6EBF8B"
  },
  {
      background: "#006E7F"
  }
];
//collors array is holding colors to be outputted in a randomizing order to change background color.

let timer;

function getRandomColor() {
  let randomColor = Math.floor(Math.random() * colors.length);

  return colors[randomColor];
}
// getrandomColor generates a random color from colors array and assigns it to a variable.

function getRandomQuote() {
  let randomQuote = Math.floor(Math.random() * quotes.length);

  return quotes[randomQuote];
}
// getrandomQuote generates a random number and assigns it to a variable then uses it to return a random object from the array.

function startTimer() {
  timer = setInterval(printQuote, 20000);
}
// refreshes the page every 20 seconds using setInterval

function clearTimer() {
  clearInterval(timer);
}
//clears the timer

function printQuote() {
  let currentColor = getRandomColor();
  let currentQuote = getRandomQuote();
  let html = "<p class='quote'>" + currentQuote.quote + "</p>";
  html += "<span class='source'> " + currentQuote.source + "</span>"
  
// creates the currentQuote var and sets the value to the random object that is returned when the getRandomQuote function is called.


if ("citation" in currentQuote) {
  html += "<span class='source'>" +
  currentQuote.citation + "</span>"
}
// checks to see if citation property is available and uses it if so.

if ("year" in currentQuote) {
  html += "<span class='year'>" + currentQuote.year + "</span>";
}
// checks to see if year property is available and uses it if so.

if ("tag" in currentQuote) {
  html += "<span class='tag'>" + currentQuote.tag + "</span>"
}
// checks to see if tag property is available and uses it if so.

  document.getElementById("quote-box").innerHTML = html;
  document.body.style.background = currentColor.background;
  document.getElementById("load-quote").style.background = currentColor.button;

  clearTimer();
  startTimer();
}
printQuote();


 //click event listener for the print quote button

document.getElementById('load-quote').addEventListener("click", printQuote, false);   
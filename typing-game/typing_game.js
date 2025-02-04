const quotes = [
  "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
  "There is nothing more deceptive than an obvious fact.",
  "I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.",
  "I never make exceptions. An exception disproves the rule.",
  "What one man can invent another can discover.",
  "Nothing clears up a case so much as stating it to another person.",
  "Education never ends, Watson. It is a series of lessons, with the greatest for the last.",
];

// To display all the quotes
// const displayAllQuotes = document.getElementById("quotes");
// quotes.forEach(quote => {
// 	const paragraph = document.createElement("p")
// 	paragraph.textContent = quote;
// 	displayAllQuotes.appendChild(paragraph)
// });

// array for storing the words of the current challenge
let words = [];
// stores the index of the word teh player is currently typing
let wordIndex = 0;
// default value for start time. (will be set as soon as player clicks on start)
let startTime = Date.now();

// UI Elements
const quoteElement = document.getElementById("quote");
const messageElement = document.getElementById("message");
const typedValueElement = document.getElementById("typed-value");

// Soon as user clicks on the start button
document.getElementById("start").addEventListener("click", function () {
  // get a quote
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];

  //put the quote into an array of words
  words = quote.split(" ");

  //reset the word index for tracking
  wordIndex = 0;

  // UI Updates.
  // Create an array of span elements so we can set  a class
  const spanWords = words.map(function (word) {
    return `<span>${word} </span>`;
  });

  quoteElement.innerHTML = spanWords.join("");

  // Highlight the first word
  quoteElement.children[0].className = "highlight";

  console.log(quoteElement.children);
  //clear any prior message
  messageElement.innerText = "";

  // set up the text box/ clear
  typedValueElement.value = "";

  // set focus
  typedValueElement.focus();

  // start the timer
  startTime = new Date().getTime();

  //   console.log(spanWords);
});

typedValueElement.addEventListener("input", () => {
  // get the current word
  const currentWord = words[wordIndex];
  console.log("Current Word", currentWord);

  // get the current value
  const typedValue = typedValueElement.value;
  console.log("Typed Value", typedValue);

  console.log("Word Index", wordIndex);
  console.log("Words Lenght", words.length);

  // verify
  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // end of sentence display message
    const elapsedTime = new Date().getTime() - startTime;
    const message = `Congratulations! You finished in ${
      elapsedTime / 1000
    } seconds`;
    messageElement.innerText = message;
  } else if (typedValue.endsWith(" ") && typedValue.trim() === currentWord) {
    // end of word
    // clear the typedValue Element for the upcoming word
    typedValueElement.value = "";

    // move to the next word
    wordIndex++;

    // reset thte class name for all the elements in quote
    for (const wordElement of quoteElement.children) {
      wordElement.className = "";
    }

    // highlight the new word
    // quoteElement.children[wordIndex].className = "highlight";
    if (wordIndex < quoteElement.children.length) {
      quoteElement.children[wordIndex].className = "highlight";
    }
    console.log(" past this");
  } else if (currentWord.startsWith(typedValue)) {
    // currently correct / highlight the next word
    typedValueElement.className = "";
  } else {
    //error state
    typedValueElement.className = "error";
  }
});

const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('next-quote')

let apiQuotes = [];

// show new quotes
function newQuote() {
    //pickrandomly from apiQuotes
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    //checking if there is no author

    if (!quote.text) {
        authorText.textContent = 'unknown';
    } else {
        quoteText.textContent = quote.text;
    }
    // checking if quote is too long to determine styling

    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote')
    }
    authorText.textContent = quote.author;


}

// getting quotes from an apiQuotes

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();

    } catch (error) {

    }
}

// Tweet quotes function
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;

    window.open(twitterUrl, '_blank');
}

// Event listeners

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);


getQuotes();
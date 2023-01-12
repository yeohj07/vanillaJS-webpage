const quotes = [
    {
        quote: "Life isn't about waiting for the storms to pass. It's about learning how to dance in the rain.",
        author: "Vivian Greene",
    },
    {
        quote: "What we think, we become.",
        author: "Buddha",
    },
    {
        quote: "The fact that you like someone now could hurt someone.",
        author: "Ralo",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

quote.style.font = "20px arial, sans-serif";
author.style.font = "20px arial, sans-serif";

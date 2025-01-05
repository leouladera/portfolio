import { MY_API_KEY } from "./config.js";

const url = "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": MY_API_KEY,
    "x-rapidapi-host": "quotes15.p.rapidapi.com",
  },
};

// Function to fetch data from the API
async function fetchQuote() {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();

    // Display the quote and author
    document.getElementById("quote-content").textContent = result.content;
    document.getElementById(
      "author"
    ).textContent = `- ${result.originator.name}`;
  } catch (error) {
    console.error("Error fetching the quote:", error);
    document.getElementById("quote-content").textContent =
      "An error occurred. Please try again.";
    document.getElementById("author").textContent = "";
  }
}

// Add event listener to the button
document.getElementById("btn").addEventListener("click", fetchQuote);

// Fetch a quote on initial load
fetchQuote();
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

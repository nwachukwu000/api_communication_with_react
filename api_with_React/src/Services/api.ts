// declare a variable to store the API URL
const url = "https://dummyjson.com/quotes"; 

async function fetchQuotes() {
    // returns the promise data type
     const data = await fetch(url);
     // this returns the json data type
     const parsedData = await data.json();
     // this returns the quote
     return parsedData.quotes;
}

export default fetchQuotes;
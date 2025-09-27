// define a variable to hold our endpoint
const url = "https://dummyjson.com/quotes"; 

// define a function that fetches the data from the api. 
async function fetchQuoteS  () {
    // this returns the promise object
    const Pres = await fetch (url);
   // this returns the json data 
   const res = await Pres.json(); 
   // this returns the Quote as an object
   return res.quotes; 
}

export default fetchQuoteS; 
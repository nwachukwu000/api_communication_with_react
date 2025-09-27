import fetchQuotes from "../Services/api";

//const response = await fetchQuotes();
//console.log (response); 

type Quotes = {
  id: number;
  quote: string;
};


const quotes : Quotes[] = await fetchQuotes();



const QuoteS = () => {
    return (
        <>
        <div>Quotes</div>
        <div>{quotes.map(quote => <div key={quote.id}>{quote.quote}</div>)} </div>
        </>
    ); 
}

export default QuoteS;
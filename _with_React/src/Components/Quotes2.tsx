import fetchQuoteS from "../Services/api1";

// define a data type for the quote object
type QuotesS = {id : number , quote : string}

const quotes : QuotesS[] = await fetchQuoteS(); 

function QuoteSS () {
   
     return (
        <>
        <div>
        {quotes.map(quote => <div key={quote.id}>{quote.quote}</div>)}
        </div>
        </>
     );

}

export default QuoteSS
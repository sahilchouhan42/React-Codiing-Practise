import React, { useState } from 'react'

const Quote2 = () => {

    const quotes = [
        "Success is not final, failure is not fatal.",
        "Dream big and dare to fail.",
        "Believe you can and you're halfway there.",
        "Stay hungry, stay foolish.",
        "Act as if what you do makes a difference.",
        "The best way out is always through."
    ];

     const [quote, setQuote]=useState('')

     function randomQuote(){
        setQuote(quotes[Math.floor(Math.random()*quotes.length)])
     }

  return (
    <div>
      <h1>Quote2 Component</h1>
      <br /><br />
      <button onClick={randomQuote}>Generate Quote</button>
      {quote && <h2>"{quote}"</h2>}

      {
        quote && (
            <div>
                <button onClick={randomQuote}>Next</button>
                <button onClick={()=>setQuote('')}>Clear</button>
            </div>
        )
      }

    </div>
  )
}

export default Quote2

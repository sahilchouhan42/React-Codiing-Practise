import React, { useState } from 'react'

const Quote1 = () => {

    const quotes = [
        "Success is not final, failure is not fatal.",
        "Dream big and dare to fail.",
        "Believe you can and you're halfway there.",
        "Stay hungry, stay foolish.",
        "Act as if what you do makes a difference.",
        "The best way out is always through."
    ];

    const [quote, setQuote]=useState("")

    function generateQuote(){
        const index = Math.floor(Math.random()*quotes.length)
        setQuote(quotes[index])
    }

    function nextQuote(){
        generateQuote()
    }

    function clearQuote(){
        setQuote('')
    }
    return (
        <div>
            <h1>Quote 1 Component</h1>
            <br />
            <div>
                <button onClick={generateQuote}>Generate Quote</button>
                {quote && <h2>"{quote}"</h2>}

                {quote && (
                    <>
                    <button onClick={nextQuote}>Next</button>
                    <button onClick={clearQuote}>Clear</button>
                    </>
                )}
            </div>
        </div>  
    )
}

export default Quote1

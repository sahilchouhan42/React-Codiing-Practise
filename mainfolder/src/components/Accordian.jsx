import React, { useState } from 'react'

const Accordian = () => {
    const accordian = [
        {question:"What is React?", answer:"React (also known as React.js or ReactJS) is an open-source JavaScript library developed by Facebook for building user interfaces (UIs). It is primarily used for single-page applications and complex UIs where efficient updates and a component-based architecture are desired."},
        {question:"What is Vite?", answer:"Vite is a next-generation frontend build tool designed for a fast and efficient development experience. It consists of a fast development server that leverages native ES modules and Hot Module Replacement (HMR) to provide instant updates, and a build command that bundles your project for production using Rollup. Vite is framework-agnostic and works with major frameworks like Vue and React."},
        {question:"What is a Component?", answer:"A React component is an independent, reusable piece of code that serves as the fundamental building block for a user interface (UI). Conceptually, components are like JavaScript functions: they accept inputs called props (short for properties) and return React elements that describe what should appear on the screen."},
    ]

    const [openIndex, setOpenIndex] = useState(null)
    const handleAccordian = (index)=>{
        setOpenIndex(openIndex===index?null:index)
    }
  return (
    <>
      <h1>Accordian</h1>
      <div>
        {
            accordian.map((item, i)=>(
                <div key={i}>
                    <h3 style={{cursor: 'pointer'}} onClick={()=>handleAccordian(i)}>{item.question}</h3>
                    {openIndex===i&&(
                        <p>{item.answer}</p>
                    )}
                </div>
            ))
        }
      </div>

    </>
  )
}

export default Accordian

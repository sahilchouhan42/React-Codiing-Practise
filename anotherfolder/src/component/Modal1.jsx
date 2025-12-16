import React, { useState } from 'react'

const Modal1 = () => {
    const [isopen, setIsOpen] = useState(false)

    const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const modalStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "8px"
};

    function openModal(){
        setIsOpen(true)
    }

    function closeModal(){
        setIsOpen(false)
    }
  return (
    <div>
        <h1>Modal Component 1</h1>
      <button onClick={openModal}>Open Modal</button>
      <br /><br />
      {
        isopen && (
            <div style={overlayStyle}>
                <div style={modalStyle}>
                    <h2>This is Modal</h2>
                    <button onClick={closeModal}>Close</button>
                </div>
            </div>
        )
      }

    </div>
  )
}

export default Modal1

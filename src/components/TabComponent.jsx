import React, { useState } from 'react'

const TabComponent = () => {

  const [activeTab, setActiveTab] = useState(0)

  const tabData = [
    {title: 'Home', content: "Welcome to Home Tab!"},
    {title: 'Profile', content: "User Profile Information"},
    {title: 'Settings', content: "Application Settings Options"},
  ]

  return (
    <>
    <h1>Tabs Component</h1>
    {/* Tabs */}
    <div style={{display:'flex', gap: '15px', marginBottom:'20px'}}>
      {tabData.map((tab, index)=>(
        <button style={{
              padding: "10px 20px",
              cursor: "pointer",
              borderRadius: "5px",
              border: "1px solid #ccc",
              backgroundColor: activeTab === index ? "#333" : "#eee",
              color: activeTab === index ? "#fff" : "#000",
              fontWeight: activeTab === index ? "bold" : "normal",
            }} key={index} onClick={()=>setActiveTab(index)}>{tab.title}</button>
      ))}
    </div>

    {/* Tab content */}
    <div style={{padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",}}></div>
          <h2>{tabData[activeTab].title}</h2>
          <p>{tabData[activeTab].content}</p>
    </>
  )
}

export default TabComponent

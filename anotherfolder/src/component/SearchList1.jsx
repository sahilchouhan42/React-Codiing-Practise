import React, { useState } from 'react'

const SearchList1 = () => {
    const items = [
    "Apple",
    "Banana",
    "Orange",
    "Pineapple",
    "Mango",
    "Grapes"
  ];

  const [search, setSearch] = useState('')

  function handleSearch(e){
    setSearch(e.target.value)
  }

  const filteredItems = items.filter((item)=>item.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h1>Search List Component 1</h1>
      <br /><br />
      <input type="text" name="" id="" placeholder='Search Items' onChange={handleSearch} />
      <br /><br />
      {
        search.trim()===''?null: <ul>
        {
            filteredItems.map((item,i)=>(
                <li key={i}>{item}</li>
            ))
        }
      </ul>
      }
    </div>
  )
}

export default SearchList1

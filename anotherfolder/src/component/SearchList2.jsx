import React, { useState } from 'react'

const SearchList2 = () => {
    const items = [
    "Apple",
    "Banana",
    "Orange",
    "Pineapple",
    "Mango",
    "Grapes"
  ];

  const [search, setSearch] = useState('')
  const filteredItems = items.filter((item)=>item.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
      <h1>Search List Component 2</h1>
      <br /><br />
      <input type="text" name="" id=""  placeholder='Search item' onChange={(e)=>setSearch(e.target.value)}/>
      <br /><br />
      {
        search.trim()===''?null: <ul>
            {
                filteredItems.map((item, i)=>(
                    <li key={i}>{item}</li>
                ))
            }
        </ul>
      }
    </div>
  )
}

export default SearchList2

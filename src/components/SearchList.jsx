import React, { useState } from 'react'

const SearchList = () => {
    const items = ["Apple", "Banana", "Orange", "Mango", "Grapes"]
    const [search, setSearch] = useState('')
    const filteredItems = items.filter((item)=>item.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
    <h1>Search filters</h1>
      <input type="text" placeholder='search fruits...' value={search} onChange={(e)=>setSearch(e.target.value)}  />
      <br /><br />
      {filteredItems==0?(
        <p>No results found</p>
      ): (
        <ul>
            {filteredItems.map((item, i)=>(
                <li key={i}>{item}</li>
            ))}
        </ul>
      )}
    </>
  )
}

export default SearchList

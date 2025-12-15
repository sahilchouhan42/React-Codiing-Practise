import React, { useState } from 'react'

const Pagination1 = () => {
    const items = [
    "Item 1","Item 2","Item 3",
    "Item 4","Item 5","Item 6",
    "Item 7","Item 8","Item 9"
  ];

  const [page, setPage] = useState(0)
  const itemsPerPage = 3

  function nextPage(){
    if((page+1)*itemsPerPage<items.length)
        setPage(page + 1)
  }

  function prevPage(){
        if(page>0){
            setPage(page-1)
        }
  }

  const visibleItems = items.slice(
    page*itemsPerPage,
    page*itemsPerPage + itemsPerPage
  )
  return (
    <div>
      <h1>Pagination Component 1</h1>
      <br />
      <h3>Items</h3>
      <br />
      <ul>
        {
            visibleItems.map((item)=>(
                <li key={item}>{item}</li>
            ))
        }
      </ul>
      <button onClick={prevPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
    </div>
  )
}

export default Pagination1

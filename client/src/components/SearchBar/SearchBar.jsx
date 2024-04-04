import { useState } from 'react'
import './searchbar.css'

function SearchBar({ searchQuery }) {

  const [fieldData, setFieldData] = useState(null)



  function handleForm(e) {

    e.preventDefault()

    searchQuery(fieldData)
  }


  return (
    <div className="container my-3 my-sm-0" id='search-bar-container'>
      <form className="form-inline" onSubmit={handleForm}>
        <div className="input-group input-group-sm mx-auto">
          <input type="search" className="form-control" placeholder="Search Here" aria-label="Search Here" aria-describedby="button-addon2" onChange={(e) => { setFieldData(e.target.value) }} required />
          <button className="btn" type="submit" id="button-addon2">Search</button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
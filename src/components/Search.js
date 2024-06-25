import React, { useState } from "react"

function Search({ onSearch }) {
  const [searchInput, setSearchInput] = useState("")

  const handleChange = (e) => {
    onSearch(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleChange} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search

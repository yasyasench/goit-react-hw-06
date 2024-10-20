import React from 'react'
import css from "./SearchBox.module.css"

const SearchBox = ({value, onFilter}) => {
  return (
    <div className={css.searchBox}>
      <label className={css.label}>Find contact by name</label>
      <input className={css.searchInput}
        type='text'
        value={value}
        onChange={e => onFilter(e.target.value)}>
        
        </input>
    </div>
  )
}

export default SearchBox
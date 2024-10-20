import React from 'react'
import css from "./SearchBox.module.css"

import { changeFilter, selectNameFilter } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
  
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (

    <div className={css.searchBox}>
      <label className={css.label}>Find contact by name</label>
      <input
        className={css.searchInput}
        type='text'
        name="search"
        value={filter}
        onInput={e => dispatch(changeFilter(e.target.value))}>
        
        </input>
    </div>
  )
}

export default SearchBox
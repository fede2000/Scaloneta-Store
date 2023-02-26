import React from 'react'
import { InputSearch, SearchDiv } from './SearchStyled'
import { BiSearch } from "react-icons/bi";

const Search = ({ value, onChange }) => {
  return (
    <SearchDiv>
      <span class="material-symbols-outlined">
        search
      </span>
        <InputSearch
        type="text"
        placeholder="Search by name"
        value={value}
        onChange={onChange}
      />
    </SearchDiv>
  )
}

export default Search
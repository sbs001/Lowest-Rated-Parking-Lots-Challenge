import React, { useState } from 'react';
import './SearchBar.css';
import { BsSearch } from "react-icons/bs";
import { useHistory } from 'react-router-dom';

export default function SearchBar() {

  const [input, setInput] = useState('');
  const history = useHistory();

  const handleInputChange = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/search?=${input}`);
    document.getElementById('SearchBarForm').reset()
  }

  return (
    <div className='searchBar'>
      <form id='SearchBarForm' onSubmit={handleSubmit}>

        <input name="search" type="text" onChange={handleInputChange} placeholder="Example: San Francisco..." required />
        <button type="submit"><BsSearch /></button>

      </form>
    </div>
  )
}
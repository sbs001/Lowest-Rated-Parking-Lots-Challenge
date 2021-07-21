import React from 'react';
import SearchBar from '../SeacrhBar/SearchBar';
import logo from '../../imgs/logo.png';
import './Nav.css';


export default function Nav(){

  return(
    <div className="nav">
      <img src={logo} alt="" />
      <SearchBar />
    </div>
  )
}
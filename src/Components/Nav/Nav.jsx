import React from 'react';
import SearchBar from '../SeacrhBar/SearchBar';
import logo from '../../imgs/logo.png';
import './Nav.css';
import { Link } from 'react-router-dom';


export default function Nav() {

  return (
    <div className="nav">
      <Link to="/home">
        <img src={logo} alt="" />
      </Link>
      <div className="navSearchBar">
        <SearchBar />
      </div>
    </div>
  )
}
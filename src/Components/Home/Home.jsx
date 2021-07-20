import React from 'react';
import SearchBar from '../SeacrhBar/SearchBar';
import './Home.css'

export default function Home(){

  return (
    <div className="home">
      <h1>Welcome to ParkingApp</h1>
      <h3>Please, search location</h3>
      <SearchBar />
    </div>
  )
}
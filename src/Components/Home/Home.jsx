import React from 'react';
import SearchBar from '../SeacrhBar/SearchBar';
import './Home.css'

export default function Home() {

  return (
    <div className="home">
      <div className="modal fadeIn">
        <h1>Welcome to ParkingZone</h1>
        <h3>Please, search location</h3>
        <div className="homeSearchBar">
          <SearchBar />
        </div>
      </div>
    </div>
  )
}
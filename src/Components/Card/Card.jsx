import React from 'react';
import './Card.css'

export default function Card({ parkingLot }) {

  return (
    <div>
      <img src={parkingLot.img} alt="" />
      <div className="cardInfo">
        <h1>{parkingLot.name}</h1>
        <span>{parkingLot.rating}</span>
        <span>{parkingLot.reviewCount}</span>
        <h3>{parkingLot.address}</h3>
      </div>
      <a href={parkingLot.yelpUrl} target="_blank" rel="noreferrer">
        <button>View in Yelp!</button>
      </a>
    </div>
  )
}
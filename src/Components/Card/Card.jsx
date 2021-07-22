import React from 'react';
import './Card.css'
import { FcApproval, FcHighPriority } from "react-icons/fc";
import ReactStars from "react-rating-stars-component";

export default function Card({ parkingLot }) {
  return (
    <div className="card fadeIn">
      <img src={parkingLot.img} alt="not img" />

      <div className="cardInfo">

        <div className="cardInfoHeader">
          <div className="CardTitle">
            <h1>{parkingLot.name}</h1>
            {
              parkingLot.isOpen ?
                <div className="isOpen"><FcApproval className="icon" /> <span> Open</span></div>
                :
                <div className="isOpen"> <FcHighPriority className="icon" /> <span> Closed</span> </div>
            }
          </div>
          <div className="cardScore">
            <span className="score">{parkingLot.score}</span>
            <span>Score</span>
          </div>
        </div>
        <div className="CardReview">
          <ReactStars count={5} size={40} value={parkingLot.rating} edit={false} isHalf={true} activeColor="#ffd700" />
          <span className="countReviews">{parkingLot.reviewCount}</span>
        </div>
        <div className="cardAddres">
          <h2> {parkingLot.address}</h2>
          <span>Phone: {parkingLot.phone || "Not available"}</span>
        </div>
        <a href={parkingLot.yelpUrl} target="_blank" rel="noreferrer">
          <button>View in Yelp!</button>
        </a>
      </div>
    </div>
  )
}
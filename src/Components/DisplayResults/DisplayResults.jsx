import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import './DisplayResults.css';

export default function DisplayResults() {

  const parkingLots = useSelector(state => state.parkingLots);

  return (
    <div className="displayResults">
      {parkingLots.map(parkingLot => <Card parkingLot={parkingLot} />)}
    </div>
  )
}
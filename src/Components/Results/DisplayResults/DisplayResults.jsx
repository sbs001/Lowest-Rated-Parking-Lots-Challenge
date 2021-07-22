import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import Card from '../../Card/Card';
import { resultsPag } from '../paged';
import './DisplayResults.css';
import Paged from './Paged/Paged';
import spinner from '../../../imgs/spn.gif'

export default function DisplayResults() {

  const parkingLots = useSelector(state => state.parkingLots);
  const location = useParams().location;
  const page = useLocation().search.substr(6) || 1;

  if (!parkingLots.length) return <img className="spinner" src={spinner} alt="" />

  return (
    <div className="displayResults">
      <div className="dispResHead">
        <span>Top parking lots with the lowest ratings for:
          <span className="dispResLocation">{location[0].toUpperCase() + location.substr(1)}</span>
          ({parkingLots.length})
        </span>
        <Paged actualPage={page} />
      </div>

      {resultsPag(parkingLots, page).map((parkingLot, i) =>
        <Card key={i} parkingLot={parkingLot} />)}
        
      <div className='pagedBottom'>
        <Paged actualPage={page} />
      </div>
    </div>
  )
}
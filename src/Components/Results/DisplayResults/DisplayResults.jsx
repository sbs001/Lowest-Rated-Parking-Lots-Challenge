import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Card from '../../Card/Card';
import { resultsPag } from '../paged';
import './DisplayResults.css';
import Paged from './Paged/Paged';

export default function DisplayResults() {

  const parkingLots = useSelector(state => state.parkingLots);

  const page = useLocation().search.substr(6) || 1;

  return (
    <div className="displayResults">
      <Paged actualPage={page} />
      {resultsPag(parkingLots, page).map((parkingLot, i) => <Card key={i} parkingLot={parkingLot} />)}
      <Paged actualPage={page} />
    </div>
  )
}
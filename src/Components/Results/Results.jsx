import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getParkingLotsByLocation } from '../../redux/actions/actions';
import Nav from '../Nav/Nav';
import DisplayResults from './DisplayResults/DisplayResults';
import './Results.css'

export default function Results() {

  const dispatch = useDispatch();
  const location = useParams().location;

  useEffect(() => {
    dispatch(getParkingLotsByLocation(location))
  }, [location, dispatch])

  return (
    <div className="results">
      <Nav />
      <DisplayResults />
    </div>
  )
}
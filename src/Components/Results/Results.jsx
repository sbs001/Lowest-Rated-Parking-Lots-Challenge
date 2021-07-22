import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getParkingLotsByLocation } from '../../redux/actions/actions';
import DisplayResults from '../DisplayResults/DisplayResults';
import Nav from '../Nav/Nav';
import './Results.css'

export default function Results(){

  const dispatch = useDispatch();
  const query = useLocation().search.split('&page=');

  useEffect(()=>{
    dispatch(getParkingLotsByLocation(query[0].split('=')[1], query[1]))
  },[query,dispatch])

  return (
    <div className="results">
      <Nav />
      <DisplayResults />
    </div>
  )
}
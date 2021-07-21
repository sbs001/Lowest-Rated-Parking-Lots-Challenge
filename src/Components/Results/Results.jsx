import React from 'react';
import DisplayResults from '../DisplayResults/DisplayResults';
import Nav from '../Nav/Nav';
import './Results.css'

export default function Results(){

  return (
    <div className="results">
      <Nav />
      <DisplayResults />
    </div>
  )
}
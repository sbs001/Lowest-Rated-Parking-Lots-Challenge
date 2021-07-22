import React from 'react';
import './Paged.css';
import { FcPrevious, FcNext } from "react-icons/fc";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Paged({ actualPage }) {

  const history = useHistory();
  const total = useSelector(state => state.parkingLots.length);

  const handleClick = (indication) => {
    indication === 'back' ? history.push('?page=' + Number(actualPage - 1)) : history.push('?page=' + (Number(actualPage) + 1))
  }

  return (
    <div>
      {actualPage > 1 ? <FcPrevious onClick={() => handleClick('back')} /> : <FcPrevious className="disabled" />}
      <span>{actualPage} of {Math.ceil(total/10)}</span>
      {actualPage <= total / 10 ? <FcNext onClick={() => handleClick('next')} /> : <FcNext className="disabled" />}

    </div>
  )
}
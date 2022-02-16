import React from 'react';
import Calculator from '../components/Calculator';

const RenderCal = () => {
  return (
    <div className="container">
      <p className="cal-p">Let'do some math!</p>
      <Calculator />
    </div>
  )
}

export default RenderCal;
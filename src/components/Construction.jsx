import React from 'react'
import './construct.css'

import construction from '../IMAGES1/costruct1.jpeg'

const Construction = () => {
  return (
    <div className="construction-container">
        <div className="construction">
            <div className="construction-img">
            <img src={construction} alt='construction'  />
            </div>
            <h1>We're Under Construction !!</h1>
        </div>
    </div>
  )
}

export default Construction
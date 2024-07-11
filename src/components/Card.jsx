import React from 'react'
import '../css/Card.css'
function Card ({imageSrc, title, price}) {
  return (
    <div className="container">
        <div className="card">
            <img className="card-img" src={imageSrc} alt="Wedding Dress"/>
            <h2 className="card-title">{title}</h2>
            <p className="card-price">₱ {price} </p>
        </div>
    </div>

  )
}

export default Card
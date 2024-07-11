// src/pages/WeddingDress.js
import React from 'react';
import Card from '../components/Card';
import wd1 from '../assets/wd1.png';
import wd2 from '../assets/wd2.png'; 
import wd3 from '../assets/wd3.png';
import wd4 from '../assets/wd4.png';
import wd5 from '../assets/wd5.png';
import wd6 from '../assets/wd6.png';
import '../css/WeddingDress.css';

function WeddingDress() {
  return (
    <div className="container">
      <ul className="row">
        <li>
          <Card imageSrc={wd1} title="Elegant Dress" price="6000" />
        </li>
        <li>
          <Card imageSrc={wd2} title="Backless Dress" price="7000" />
        </li>
      </ul>
      <ul className="row">
        <li>
          <Card imageSrc={wd3} title="Halter Dress" price="3000" />
        </li>
        <li>
          <Card imageSrc={wd4} title="Casual Dress" price="8000" />
        </li>
      </ul>
      <ul className="row">
        <li>
          <Card imageSrc={wd5} title="Off-Shoulder Dress" price="6000" />
        </li>
        <li>
          <Card imageSrc={wd6} title="V-neck Dress" price="8000" />
        </li>
      </ul>
    </div>
  );
}

export default WeddingDress

import React from 'react';
import about from '../assets/about.png';
import '../css/About.css';

function About() {
  return (<>
      <div className="about-container">
      <img src={about} alt="Destined" className="about-image" />
      <h1 className="about-title">About Us</h1>
      <p className="intro">Welcome to <span className="brand-name">destined</span></p>
  
    </div>
          <div className="info1">
          <p className="descri">
          At Destined, we believe that your wedding day should be nothing short of perfect.
          Specializing in exquisite wedding dresses and comprehensive wedding planning services,
          Destined is your ultimate partner in creating the wedding of your dreams.
          </p>
        </div>

        <div className="info2">
        
          <h1 className="services-info">Services we offer</h1>

              <div className="service-container">
                <h3 className="service-title">Wedding Dress Catalog </h3>
                <p className="service-info">Explore our meticulously curated collection of wedding dresses, crafted with the finest fabrics and attention to detail.</p>
              </div>
              
              <div className="service-container">
                <h3 className="service-title">Wedding Planning To-Do List  </h3>
                <p className="service-info">Simplify your wedding planning journey with our comprehensive checklist. 
                  From venue selection to honeymoon planning, 
                  we guide you every step of the way.</p>
              </div>
             

        </div>
  
  </>

  );
}

export default About

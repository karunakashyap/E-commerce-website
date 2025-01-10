import React from 'react';
import './Hero.css';
import handIcon from '../Assets/hand_icon.png';
import arrowIcon from '../Assets/arrow.png';
import heroImage from '../Assets/hero_image.png'

const Hero = () => {
  return (
      <div className="hero">
        <div className="hero-left-section">
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className='hero-hand-icon'>
              <p>new</p>
              <img src={handIcon} alt='hand-icon'></img>
            </div>
            <p>collections</p>
            <p>for everyone</p>
          </div>
          <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrowIcon} alt='arrow'></img>
          </div>
        </div>
        <div className="hero-right-section">
          <img src={heroImage} alt='heroImage'></img>
        </div>
      </div>
  )
}

export default Hero

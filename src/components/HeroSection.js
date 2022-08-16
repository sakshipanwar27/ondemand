import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/dust.mp4' autoPlay loop muted />
      <div className='moto'>
      <h2>WASH !</h2>

      <h1>RINSE !</h1>
      <h2>GO !</h2>
      </div>
      <p>Book today, wash your vechicle as often as you want.</p>
      <div className='hero-btns'>
      
        <a
          className='btns'
          href ='/SignUp'
          
        >
        Book Now
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
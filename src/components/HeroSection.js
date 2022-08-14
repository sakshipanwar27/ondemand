import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/dust.mp4' autoPlay loop muted />
      <h2>WASH !</h2>
      <h1>RINSE !</h1>
      <h2>GO !</h2>
      <p>Book today, wash your vechicle as often as you want.</p>
      <div className='hero-btns'>
      
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
        Book Now
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
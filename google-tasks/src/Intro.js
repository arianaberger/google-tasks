import React from 'react';
import Splash from './images/intro-splash.png';

const Intro = () => {
  return (
    <>
    <div className="Image-container">
      <img src={Splash} alt="splash" className="Image-splash"/>
    </div>
    <div className="Text-container">
      <h5>A fresh start</h5>
      <h6>Anything to add?</h6>
    </div>
    </>
  )
}

export default Intro;

import React from 'react';
import LifestyleBody from '../components/LifestyleBody';
import AboutLeft from '../components/AboutLeft';
import MainRight from '../components/MainRight';


export default function AboutUs() {

  return (
    <>
      <LifestyleBody/>
      <div className="bottom bwrapper">
        <AboutLeft/>
        <MainRight/>
      </div>
      </>
  );
}



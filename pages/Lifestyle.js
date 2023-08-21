import React from 'react';

import LifestyleBody from '../components/LifestyleBody';
import LifeStyleLeft from '../components/LifeStyleLeft';
import MainRight from '../components/MainRight';


export default function Lifestyle() {
  return (
      <>
    
      <LifestyleBody />
      <div className="bottom bwrapper">
        <LifeStyleLeft />
        <MainRight/>
      </div>

      </>
  );
}

import React from 'react';

import LifestyleBody from '../components/LifestyleBody';
import TravelLeft from '../components/TravelLeft';
import MainRight from '../components/MainRight';


export default function Travel() {
  return (
      <>
      <LifestyleBody />
      <div className="bottom bwrapper">
        <TravelLeft />
        <MainRight/>
      </div>
      </>
  );
}

import React from 'react';
import Navbar from '../components/Navbar';
import LifestyleBody from '../components/LifestyleBody';
import TravelLeft from '../components/TravelLeft';
import MainRight from '../components/MainRight';
import Footer from '../components/Footer';

export default function Travel() {
  return (
      <>
          <Navbar />
      <LifestyleBody />
      <div className="bottom bwrapper">
        <TravelLeft />
        <MainRight/>
      </div>
      <Footer/>
      </>
  );
}

import React from 'react';
import Navbar from '../components/Navbar';
import LifestyleBody from '../components/LifestyleBody';
import LifeStyleLeft from '../components/LifeStyleLeft';
import MainRight from '../components/MainRight';
import Footer from '../components/Footer';

export default function Lifestyle() {
  return (
      <>
          <Navbar />
      <LifestyleBody />
      <div className="bottom bwrapper">
        <LifeStyleLeft />
        <MainRight/>
      </div>
      <Footer/>
      </>
  );
}

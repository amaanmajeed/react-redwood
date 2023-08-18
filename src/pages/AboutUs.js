import React from 'react';
import Navbar from '../components/Navbar';
import LifestyleBody from '../components/LifestyleBody';
import AboutLeft from '../components/AboutLeft';
import MainRight from '../components/MainRight';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <LifestyleBody/>
      <div className="bottom bwrapper">
        <AboutLeft/>
        <MainRight/>
      </div>
      <Footer/>
      </>
  );
}



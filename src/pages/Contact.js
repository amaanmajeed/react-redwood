import React from 'react';
import Navbar from '../components/Navbar';
import LifestyleBody from '../components/LifestyleBody';
import ContactLeft from '../components/ContactLeft';
import MainRight from '../components/MainRight';
import Footer from '../components/Footer';


export default function Contact() {
  return (
    <>
          <Navbar />
          <LifestyleBody/>
    <div className="bottom bwrapper">
        <ContactLeft/>
        <MainRight/>
    </div>
       <Footer/>
    </>
  );
}




import React from 'react';

import LifestyleBody from '../components/LifestyleBody';
import ContactLeft from '../components/ContactLeft';
import MainRight from '../components/MainRight';



export default function Contact() {
  return (
    <>
    
      <LifestyleBody/>
    <div className="bottom bwrapper">
      <ContactLeft/>
      <MainRight/>
    </div>
 
    </>
  );
}




import React from 'react';
import Navbar from '../components/Navbar';
import Mainbody from '../components/Mainbody';
import MainLeft from '../components/MainLeft';
import MainRight from '../components/MainRight';
import Footer from '../components/Footer';

export default function Index() {
  return (
      <>
      <Navbar/>
      <Mainbody />
      <div className="bottom bwrapper">
      <MainLeft/>
      <MainRight/>
      </div>
      <Footer/>
      </>
  );
}

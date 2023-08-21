import './style.css';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainLeft from './components/MainLeft';
import MainRight from './components/MainRight';

import Mainbody from './components/Mainbody';
import LifestyleBody from './components/LifestyleBody';
import LifeStyleLeft from './components/LifeStyleLeft';
import AboutLeft from './components/AboutLeft';
import ContactLeft from './components/ContactLeft';
import TravelLeft from './components/TravelLeft';

export default function Inner() {
  const { pathname } = useLocation();
  const isIndexRoute = pathname === '/';

  return (
  <>
      {isIndexRoute ? <Mainbody /> : <LifestyleBody />}
      <div className="bottom bwrapper">
      
        <Routes>
          <Route path="/" element={<MainLeft />} />
          <Route path="/aboutus" element={<AboutLeft />} />
          <Route path="/contact" element={<ContactLeft/>} />
          <Route path="/lifestyle" element={<LifeStyleLeft />} />
          <Route path="/travel" element={<TravelLeft />} />
        </Routes>


        <MainRight/>
        </div>
      </>
  );
}

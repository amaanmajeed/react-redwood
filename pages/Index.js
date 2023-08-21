import React from 'react';
import { useLocation } from 'react-router-dom';
import Mainbody from '../components/Mainbody';
import MainLeft from '../components/MainLeft';
import MainRight from '../components/MainRight';

export default function Index() {
  return (
      <>
      <Mainbody />
      <div className="bottom bwrapper">
      <MainLeft/>
      <MainRight/>
      </div>
      </>
  );
}

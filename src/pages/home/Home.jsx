import React from 'react';
import Topbar from '../../components/topbar/Topbar';

import Timeline from '../../components/timeline/Timeline';
import Rightbar from '../../components/rightbar/Rightbar';
import './Home.css';
import Sidebar from '../../components/sidbar/Sidebar';

const Home = () => {
  return (
    <>
      <Topbar />
      <div className='homeContainer'>
        <Sidebar />
        <Timeline />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
